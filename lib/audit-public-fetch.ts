import { env } from 'cloudflare:workers';
// The binding reads only this site's public GET resources. External URLs still
// use network fetch and must pass the calling route's DNS/redirect checks.
export function fetchAuditPage(input:string|URL,init:RequestInit):Promise<Response>{
 const url=new URL(input.toString());
 const method=(init.method||'GET').toUpperCase();
 const binding=(env as unknown as {DMB_PUBLIC_SITE?:{fetch(request:Request):Promise<Response>}}).DMB_PUBLIC_SITE;
 if(binding&&url.origin==='https://dmbureau.cloud'&&method==='GET'&&!/^\/(?:api|admin)(?:\/|$)/i.test(decodeURIComponent(url.pathname))){
  return binding.fetch(new Request(url,init));
 }
 return fetch(url,init);
}
