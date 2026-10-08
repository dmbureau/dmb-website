import { services,industries } from '@/lib/content';
import { articles } from '@/lib/articles';
import { markets } from '@/lib/markets';
import { origin } from '@/lib/site';
export async function GET(){const paths=['','/services','/performance-marketing','/organic-marketing','/industries','/blog','/about','/contact','/privacy','/free-seo-audit','/markets','/seo-bureau','/ppc-bureau','/social-bureau',...services.map(s=>'/services/'+s.slug),...industries.map(i=>'/industries/'+i.slug),...articles.map(a=>'/blog/'+a.slug),...markets.map(m=>'/markets/'+m.slug)];const body='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+paths.map(path=>'<url><loc>'+origin+path+'</loc></url>').join('')+'</urlset>';return new Response(body,{headers:{'content-type':'application/xml; charset=utf-8','cache-control':'public, max-age=3600'}})}

