import { origin } from '@/lib/site';
export async function GET(){return new Response('User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: '+origin+'/sitemap.xml\n',{headers:{'content-type':'text/plain; charset=utf-8'}})}
