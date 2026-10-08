import {env} from 'cloudflare:workers';
import {validatePublicUrl} from '@/lib/audit';
import {sameWebsite,type BusinessLookup,type AdFinding} from '@/lib/audit-business';
const sources=['Meta: Facebook & Instagram','Google Ads Transparency Center','LinkedIn Ad Library'];
export async function POST(request:Request){
 const headers={'Cache-Control':'private, no-store'};
 if(request.headers.get('origin')&&request.headers.get('origin')!==new URL(request.url).origin)return Response.json({error:'Use the website audit form.'},{status:403,headers});
 try{
 const raw=await request.text();if(raw.length>3500)throw Error();const input=JSON.parse(raw);const url=validatePublicUrl(input.url);const name=typeof input.name==='string'?input.name.slice(0,150):url.hostname;const address=typeof input.address==='string'?input.address.slice(0,250):'';
 const config=env as unknown as {AUDIT_EXTERNAL_LOOKUPS?:string;SEARCHAPI_API_KEY?:string;GOOGLE_PLACES_API_KEY?:string};
 const enabled=config.AUDIT_EXTERNAL_LOOKUPS==='enabled';
 const result:BusinessLookup={checkedAt:new Date().toISOString(),ads:sources.map(source=>({source,status:'Data unavailable',advertiser:'',evidenceUrl:'',from:'',to:'',count:null,detail:'Automatic ad-library data is not connected. Campaign status cannot be confirmed.'})),listing:{status:'Data unavailable',message:'Google Maps listing data is not connected. Website details are shown separately below.',matches:[]}};
 // Paid lookups require explicit operator enablement. Never fall back to invented data.
 if(!enabled)return Response.json(result,{headers});
 const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(url.href+'|'+name+'|'+address));
 const cacheUrl=new URL('/__audit-business-cache/'+Array.from(new Uint8Array(digest),n=>n.toString(16).padStart(2,'0')).join(''),request.url);
 const cache=(caches as CacheStorage & {default:Cache}).default;const cached=await cache.match(cacheUrl);if(cached)return new Response(cached.body,{headers:{'Content-Type':'application/json',...headers}});
 const tasks:Promise<void>[]=[];
 if(config.SEARCHAPI_API_KEY)for(const [i,engine] of ['meta_ad_library','google_ads_transparency_center','linkedin_ad_library'].entries())tasks.push((async()=>{
  try{const endpoint=new URL('https://www.searchapi.io/api/v1/search');endpoint.searchParams.set('engine',engine);if(i===0){endpoint.searchParams.set('q',url.hostname.replace(/^www\./,''));endpoint.searchParams.set('active_status','active');endpoint.searchParams.set('country','ALL')}else if(i===1){endpoint.searchParams.set('domain',url.hostname.replace(/^www\./,''));endpoint.searchParams.set('time_period','last_30_days')}else{endpoint.searchParams.set('advertiser',name);endpoint.searchParams.set('time_period','last_30_days')}
  const r=await fetch(endpoint,{headers:{Authorization:'Bearer '+config.SEARCHAPI_API_KEY},signal:AbortSignal.timeout(25000)});if(!r.ok)throw Error();const data=await r.json() as any;if(data.error||!Array.isArray(data.ads))throw Error();
  const records=data.ads.slice(0,40);const matched=i===0?records.filter((a:any)=>[a.snapshot?.link_url,...(a.snapshot?.cards||[]).map((c:any)=>c.link_url)].some(v=>typeof v==='string'&&sameWebsite(v,url.href))):i===2?records.filter((a:any)=>String(a.advertiser?.name||'').trim().toLowerCase()===name.trim().toLowerCase()):records;
  const a=matched[0];const evidence=i===0&&a?.ad_archive_id?'https://www.facebook.com/ads/library/?id='+encodeURIComponent(a.ad_archive_id):i===1?'https://adstransparency.google.com/?domain='+encodeURIComponent(url.hostname):a?.link||'';
  result.ads[i]={source:sources[i],status:matched.length?(i===2?'Advertiser-name match — identity needs confirmation':'Library records found'):'No matching record in returned sample',advertiser:String(a?.snapshot?.page_name||a?.advertiser?.name||a?.advertiser_name||'').slice(0,200),evidenceUrl:/^https:\/\/(?:www\.)?(?:facebook\.com|linkedin\.com|adstransparency\.google\.com)\//.test(evidence)?evidence:'',from:String(a?.start_date||'').slice(0,50),to:String(a?.end_date||'').slice(0,50),count:matched.length,detail:'Source: '+sources[i]+' via SearchApi. First returned page only; not a complete ad count. '+(i===0?'Active-ad filter; destination domain matched.':i===1?'Verified-domain search, last 30 days; does not confirm an ad is active now.':'Last 30 days; a name match alone does not verify ownership.')};
  }catch{result.ads[i].detail='The connected library data source could not return a usable result. This is not proof that ads are absent.'}
 })());
 if(config.GOOGLE_PLACES_API_KEY)tasks.push((async()=>{try{
 const r=await fetch('https://places.googleapis.com/v1/places:searchText',{method:'POST',headers:{'Content-Type':'application/json','X-Goog-Api-Key':config.GOOGLE_PLACES_API_KEY!,'X-Goog-FieldMask':'places.displayName,places.formattedAddress,places.websiteUri,places.googleMapsUri,places.nationalPhoneNumber,places.rating,places.userRatingCount,places.regularOpeningHours.weekdayDescriptions'},body:JSON.stringify({textQuery:name+' '+address,pageSize:10}),signal:AbortSignal.timeout(20000)});if(!r.ok)throw Error();const data=await r.json() as any;if(!Array.isArray(data.places)&&data.places!==undefined)throw Error();
 const matches=(data.places||[]).filter((p:any)=>typeof p.websiteUri==='string'&&sameWebsite(p.websiteUri,url.href)).map((p:any)=>({name:String(p.displayName?.text||''),address:String(p.formattedAddress||''),phone:String(p.nationalPhoneNumber||''),website:String(p.websiteUri||''),mapsUrl:String(p.googleMapsUri||''),rating:typeof p.rating==='number'?p.rating:null,reviews:typeof p.userRatingCount==='number'?p.userRatingCount:null,hours:Array.isArray(p.regularOpeningHours?.weekdayDescriptions)?p.regularOpeningHours.weekdayDescriptions:[]}));
 result.listing={status:matches.length?'Website-matched listing found':'No website-matched listing returned',message:'Source: Google Maps / Places. Matches use the same website domain. A limited search cannot prove a listing is absent; private GBP performance is not included.',matches};
 }catch{result.listing.message='Google Maps could not return usable listing data. This is not proof that the business has no listing.'}})());
 await Promise.all(tasks);
 if(result.ads.some(a=>a.count!==null)||result.listing.status!=='Data unavailable')await cache.put(cacheUrl,Response.json(result,{headers:{'Cache-Control':'public, max-age=21600'}}));
 return Response.json(result,{headers});
 }catch{return Response.json({error:'Business data lookup could not run.'},{status:422,headers})}
}
