export type BusinessSignals={name:string;phone:string;address:string;mapsLinks:string[];source:string};
const text=(v:unknown)=>typeof v==='string'?v.replace(/<[^>]*>/g,'').trim().slice(0,250):'';
export function businessSignals(html:string,url:string):BusinessSignals{
 const nodes:any[]=[];
 function walk(v:any){if(Array.isArray(v))v.forEach(walk);else if(v&&typeof v==='object'){nodes.push(v);if(v['@graph'])walk(v['@graph']);}}
 for(const m of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)){try{walk(JSON.parse(m[1]))}catch{}}
 const types=['Organization','LocalBusiness','ProfessionalService','Corporation','Store','Hotel','Restaurant','MedicalBusiness','RealEstateAgent'];
 const business=nodes.find(n=>[].concat(n['@type']||[]).some(t=>types.includes(t))&&text(n.name));
 const a=business?.address;const address=typeof a==='string'?text(a):a&&typeof a==='object'?['streetAddress','addressLocality','addressRegion','postalCode','addressCountry'].map(k=>text(a[k])).filter(Boolean).join(', '):'';
 const links=[...html.replace(/<!--[\s\S]*?-->/g,'').matchAll(/(?:href|hasMap)\s*(?:=|:)\s*["']([^"']+)["']/gi)].map(m=>m[1].replace(/&amp;/g,'&')).filter(value=>{try{const u=new URL(value,url);return u.protocol==='https:'&&(/^(?:www\.)?google\.[a-z.]+$/.test(u.hostname)&&u.pathname.startsWith('/maps')||['maps.app.goo.gl','goo.gl'].includes(u.hostname))}catch{return false}});
 return {name:text(business?.name)||new URL(url).hostname,phone:text(business?.telephone),address,mapsLinks:[...new Set(links)].slice(0,5),source:business?'Business structured data on submitted page':'Website domain; business name not declared'};
}
export type AdFinding={source:string;status:string;advertiser:string;evidenceUrl:string;from:string;to:string;detail?:string;count?:number|null};
export type BusinessLookup={checkedAt:string;ads:AdFinding[];listing:{status:string;message:string;matches:{name:string;address:string;phone:string;website:string;mapsUrl:string;rating:number|null;reviews:number|null;hours:string[]}[]}};
export function sameWebsite(a:string,b:string){try{return new URL(a).hostname.replace(/^www\./,'')===new URL(b).hostname.replace(/^www\./,'')}catch{return false}}
