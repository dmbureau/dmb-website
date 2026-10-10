import catalog from '@/content/image-catalog.json';
import featured from '@/content/featured-image-map.json';
type Entry={image:string;alt:string};
export function AnimatedImage({name,alt,compact=false,eager=false}:{name:string;alt?:string;eager?:boolean;compact?:boolean}){
 const entries=featured as Record<string,Entry>;
 let entry=entries[name];
 if(name.startsWith('market-')){
  const keys=['global-marketing','paid-media-strategy','content-strategy','analytics-dashboards','on-page-seo','social-media-strategy','b2b-lead-generation','google-ads-management'];
  const hash=Array.from(name).reduce((sum,char)=>sum+char.charCodeAt(0),0);
  entry={image:keys[hash%keys.length],alt:'Marketing planning and website review for businesses serving '+name.slice(7).replace(/-/g,' ')};
 }
 const asset=(catalog.assets as Record<string,{local?:string;photoId?:string;alt:string}>)[name];
 const source=(width:number)=>entry?'/images/dmb-'+entry.image+'-'+width+'.webp':asset?.photoId?'https://images.unsplash.com/photo-'+asset.photoId+'?fm=webp&fit=crop&w='+width+'&q=70':asset?.local?'/images/'+asset.local+'-'+width+'.webp':'/images/dmb-global-marketing-'+width+'.webp';
 return <div className={'premium-visual hybrid-visual hybrid-photo'+(compact?' premium-compact':'')} data-visual-key={name}><img src={source(960)} srcSet={source(480)+' 480w, '+source(960)+' 960w'} sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 480px" width="960" height="640" alt={alt||entry?.alt||asset?.alt||'Marketing campaign research and website planning'} loading={eager?'eager':'lazy'} decoding="async"/></div>;
}
