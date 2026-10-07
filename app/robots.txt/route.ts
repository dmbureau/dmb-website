import {origin} from '@/lib/site';
export async function GET(){
 const bots=['*','Googlebot','Bingbot','CCBot','GPTBot','OAI-SearchBot','ChatGPT-User','ClaudeBot','Claude-SearchBot','Claude-User'];
 const rules=bots.map(bot=>'User-agent: '+bot+'\nAllow: /\nDisallow: /api/\nDisallow: /admin/\nDisallow: /admin\n').join('\n');
 return new Response(rules+'\nSitemap: '+origin+'/sitemap.xml\n',{headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'public, max-age=3600'}})
}
