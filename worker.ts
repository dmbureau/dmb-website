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
  // Cache only anonymous, full public documents. Never mix HTML with RSC
  // navigation payloads, query variants, APIs or personalised requests.
  const publicPath=url.pathname==='/'||/^\/(services|industries|markets|blog)(\/|$)/.test(url.pathname)||['/about','/contact'].includes(url.pathname);
  const isDocument=request.method==='GET'&&publicPath&&!url.search&&!request.headers.has('cookie')&&!request.headers.has('authorization')&&!(request.headers.get('accept')||'').includes('text/x-component')&&!Array.from(request.headers.keys()).some(key=>key==='rsc'||key.startsWith('next-router-')||key==='next-url'||key.startsWith('x-vinext-'));
  const edgeCache=(caches as CacheStorage & {default:Cache}).default;
  const cacheKey=new Request(url.origin+url.pathname+'?dmb-document-cache=20261009-premium1');
  if(isDocument){const cached=await edgeCache.match(cacheKey);if(cached){const hit=new Response(cached.body,cached);hit.headers.set('Cache-Control','public, max-age=0, must-revalidate');hit.headers.set('X-DMB-Cache','HIT');return hit}}
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
  if(isDocument&&secured.status===200&&(secured.headers.get('content-type')||'').includes('text/html')&&!secured.headers.has('set-cookie')){
   const cacheCopy=secured.clone();
   cacheCopy.headers.set('Cache-Control','public, max-age=300');
   cacheCopy.headers.delete('Vary');
   ctx.waitUntil(edgeCache.put(cacheKey,cacheCopy));
   secured.headers.set('X-DMB-Cache','MISS');
  }
  return secured;
 }
};
