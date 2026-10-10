export function marketingSignals(html:string,url:string){
 const clean=html.replace(/<!--[\s\S]*?-->/g,'');
 const links=[...clean.matchAll(/<a\b[^>]*href\s*=\s*(?:"([^"]*)"|'([^']*)')[^>]*>/gi)].map(m=>m[1]??m[2]);
 const profiles=links.flatMap(href=>{try{const u=new URL(href,url);const host=u.hostname.replace(/^www\./,'').toLowerCase();const platforms:Record<string,string>={'facebook.com':'Facebook','instagram.com':'Instagram','linkedin.com':'LinkedIn','x.com':'X','twitter.com':'X','youtube.com':'YouTube','youtu.be':'YouTube','tiktok.com':'TikTok','pinterest.com':'Pinterest'};const platform=platforms[host];if(!platform||!['http:','https:'].includes(u.protocol)||/\/(?:sharer|share|sharing|intent|dialog)(?:\/|$)/i.test(u.pathname)||u.pathname==='/')return [];return [{platform,url:u.href}]}catch{return []}});
 const unique=profiles.filter((p,i,a)=>a.findIndex(q=>q.url===p.url)===i);
 const scripts=[...clean.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi)].map(m=>m[0]).join('\n');
 const signals=[{name:'Google Tag Manager',found:/googletagmanager\.com\/gtm\.js|GTM-[A-Z0-9]+/i.test(scripts)},{name:'Google analytics tag',found:/google-analytics\.com|googletagmanager\.com\/gtag\/js|G-[A-Z0-9]{5,}/i.test(scripts)},{name:'Google Ads tag',found:/AW-\d{6,}|googleadservices\.com|googlesyndication\.com\/pagead\/conversion/i.test(scripts)},{name:'Meta Pixel',found:/connect\.facebook\.net\/[^\s"']*fbevents\.js|fbq\s*\(/i.test(scripts)},{name:'LinkedIn Insight Tag',found:/snap\.licdn\.com\/li\.lms-analytics|_linkedin_partner_id/i.test(scripts)},{name:'TikTok Pixel',found:/analytics\.tiktok\.com\/i18n\/pixel|ttq\.load\s*\(/i.test(scripts)}];
 const markup=clean.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi,' ');
 const actionLinks=links.filter(h=>/^(mailto:|tel:)/i.test(h)||/contact|inquir|enquir|book|quote|schedule|checkout/i.test(h));
 return {profiles:unique,tracking:signals,forms:(markup.match(/<form\b/gi)||[]).length,actionLinks:actionLinks.length,privacyLink:links.some(h=>/privacy/i.test(h)),sharingImage:/<meta\b[^>]*(?:property|name)=["']og:image["']/i.test(markup)};
}
