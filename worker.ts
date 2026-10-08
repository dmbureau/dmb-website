import handler from "vinext/server/fetch-handler";
export default {
 async fetch(request:Request,env:Cloudflare.Env,ctx:ExecutionContext){
  const response=await handler.fetch(request,env,ctx);
  const secured=new Response(response.body,response);
  secured.headers.set('X-Content-Type-Options','nosniff');
  secured.headers.set('Referrer-Policy','strict-origin-when-cross-origin');
  secured.headers.set('Content-Security-Policy',"base-uri 'self'; object-src 'none'; frame-ancestors 'self'");
  if(new URL(request.url).protocol==='https:')secured.headers.set('Strict-Transport-Security','max-age=15552000');
  return secured;
 }
};
