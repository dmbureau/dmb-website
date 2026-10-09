import handler from "vinext/server/fetch-handler";
export default {
 async fetch(request:Request,env:Cloudflare.Env,ctx:ExecutionContext){
  const url=new URL(request.url);
  if(request.method==='GET'||request.method==='HEAD'){
   const originalPath=url.pathname;
   if(url.pathname==='/resources'||url.pathname==='/resources/')url.pathname='/blog';
   else if(url.pathname.startsWith('/resources/'))url.pathname=url.pathname.replace(/^\/resources\//,'/blog/');
   if(url.pathname!=='/'&&url.pathname.endsWith('/'))url.pathname=url.pathname.replace(/\/+$/,'');
   if(url.pathname!==originalPath)return Response.redirect(url.toString(),301);
  }
  // Override client input so the document language follows the actual route.
  const requestHeaders=new Headers(request.headers);
  requestHeaders.set('x-dmb-pathname',url.pathname);
  const routedRequest=new Request(request,{headers:requestHeaders});
  const response=await handler.fetch(routedRequest,env,ctx);
  const secured=new Response(response.body,response);
  secured.headers.set('X-Content-Type-Options','nosniff');
  secured.headers.set('Referrer-Policy','strict-origin-when-cross-origin');
  secured.headers.set('Content-Security-Policy',"base-uri 'self'; object-src 'none'; frame-ancestors 'self'");
  if(new URL(request.url).protocol==='https:')secured.headers.set('Strict-Transport-Security','max-age=15552000');
  return secured;
 }
};
