import { getDb } from '@/db';
import { enquiries } from '@/db/schema';
import { services, industries } from '@/lib/content';
export async function POST(request:Request){
 const origin=request.headers.get('origin');if(origin&&origin!==new URL(request.url).origin)return Response.json({error:'Please submit your request from the DMB website.'},{status:403});
 const length=Number(request.headers.get('content-length')||0);if(length>14000)return Response.json({error:'Your request is too large.'},{status:413});
 let payload:Record<string,unknown>;try{const raw=await request.text();if(raw.length>14000)return Response.json({error:'Your request is too large.'},{status:413});payload=JSON.parse(raw);if(!payload||typeof payload!=='object'||Array.isArray(payload))throw Error('Invalid');}catch{return Response.json({error:'Please send a valid request.'},{status:400})}
 const field=(key:string)=>typeof payload[key]==='string'?(payload[key] as string).trim():'';
 if(field('fax'))return Response.json({error:'Your request could not be accepted.'},{status:400});
 const values={name:field('name'),email:field('email'),company:field('company'),website:field('website'),market:field('market')||'Multiple markets',industry:field('industry'),service:field('service'),package:field('package'),budget:field('budget'),problem:field('problem')};
 if(!values.name||values.name.length>100||values.company.length>160||!/^\S+@\S+\.\S+$/.test(values.email)||values.email.length>254||values.problem.length<15||values.problem.length>3000||field('consent')!=='yes')return Response.json({error:'Please check your name, email, company, problem description and consent.'},{status:400});
 const markets=['United States','United Kingdom','Canada','Australia','Europe','UAE','Dubai','Kuwait','Middle East','Asia Pacific','India','Multiple markets','Other'];
 if(!markets.includes(values.market)||(values.service&&!services.some(s=>s.slug===values.service))||(values.industry&&values.industry!=='other'&&!industries.some(i=>i.slug===values.industry))||(values.package&&!['diagnosis','growth-sprint','ongoing-growth'].includes(values.package))||values.budget.length>80)return Response.json({error:'Please select valid service and market options.'},{status:400});
 if(values.website){try{const u=new URL(values.website);if(!['http:','https:'].includes(u.protocol)||values.website.length>300)throw Error('Invalid')}catch{return Response.json({error:'Please enter a full website address starting with https://.'},{status:400})}}
 const id=crypto.randomUUID();try{await getDb().insert(enquiries).values({...values,id,createdAt:Date.now()});return Response.json({reference:'DMB-'+id.slice(0,8).toUpperCase()},{status:201})}catch{return Response.json({error:'We could not save your brief right now. Please try again shortly.'},{status:503})}
}
