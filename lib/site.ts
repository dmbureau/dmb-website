import type {Metadata} from 'next';
export const origin='https://dmbureau.cloud';
export function pageMeta(title:string,description:string,path:string):Metadata{
 const clean=title.replace(/\s*[|—]\s*Digital Marketing Bureau/g,'').trim();
 const branded=clean.length<=59?clean+' | DMB':clean;
 const image={url:origin+'/social-preview.png',width:1200,height:630,alt:'Digital Marketing Bureau — SEO, paid ads and social media'};
 return {title:{absolute:branded},description,alternates:{canonical:origin+path},robots:{index:true,follow:true},openGraph:{title:branded,description,url:origin+path,siteName:'Digital Marketing Bureau',type:'website',images:[image]},twitter:{card:'summary_large_image',title:branded,description,images:[image.url]}};
}
