import {marketTranslations} from '@/lib/market-locales';
import type {Metadata} from 'next';
export const origin='https://dmbureau.cloud';
export function pageMeta(title:string,description:string,path:string):Metadata{
 const clean=title.replace(/\s*[|—]\s*Digital Marketing Bureau/g,'').trim();
 const branded=clean.length<=59?clean+' | DMB':clean;
 const image={url:origin+'/social-preview.png',width:1200,height:630,alt:'Digital Marketing Bureau — SEO, paid ads and social media'};
 return {title:{absolute:branded},description,alternates:{canonical:origin+path},robots:{index:true,follow:true},openGraph:{title:branded,description,url:origin+path,siteName:'Digital Marketing Bureau',type:'website',images:[image]},twitter:{card:'summary_large_image',title:branded,description,images:[image.url]}};
}

// Regional versions of the market landing page. Dubai is a distinct city page,
// so it must not compete with the UAE URL for the same en-AE alternate.
export const marketLanguages: Record<string,string> = {
 'en-IN': origin+'/markets/india',
 'en-US': origin+'/markets/united-states',
 'en-GB': origin+'/markets/united-kingdom',
 'en-AE': origin+'/markets/uae',
 'en-KW': origin+'/markets/kuwait',
 'en-DE': origin+'/markets/germany',
 'en-FR': origin+'/markets/france',
 'en-NL': origin+'/markets/netherlands',
 'en-IE': origin+'/markets/ireland',
 'en-ES': origin+'/markets/spain',
 'en-IT': origin+'/markets/italy',
 'en-CH': origin+'/markets/switzerland',
 'en-SE': origin+'/markets/sweden',
 'en-DK': origin+'/markets/denmark',
 'en-NO': origin+'/markets/norway',
 'en-PL': origin+'/markets/poland',
 ...Object.fromEntries(marketTranslations.map(page=>[page.locale,origin+'/markets/'+page.slug+'/'+page.language])),
 'en': origin+'/markets',
 'x-default': origin+'/markets',
};
export function marketMeta(title:string,description:string,slug?:string,language?:string):Metadata {
 const path=slug?'/markets/'+slug+(language?'/'+language:''):'/markets';
 const metadata=pageMeta(title,description,path);
 return {...metadata,alternates:{canonical:origin+path,
   ...(slug==='dubai'?{}:{languages:marketLanguages})}};
}
