import {getVisualStory} from '@/components/premium-visual';
import catalog from '@/content/image-catalog.json';
const industryPhotos:Record<string,string>={'real-estate':'industry-real-estate','hospitality':'industry-hospitality','healthcare':'customer-conversation','travel':'industry-travel','saas':'industry-saas','ecommerce':'mobile-experience','professional-services':'legal','home-services':'construction','education':'education','recruitment':'business-meeting','logistics':'logistics','solar':'solar-energy'};
export function AnimatedImage({name,alt,compact=false,eager=false}:{name:string;alt?:string;eager?:boolean;compact?:boolean}) {
 const story=getVisualStory(name);
 const asset=(catalog.assets as Record<string,{local?:string;photoId?:string;alt:string}>)[name];
 const industry=name.includes('industry')?Object.keys(industryPhotos).find(key=>name.includes(key)):undefined;
 const isMarket=name.includes('market');
 let category='growth';
 if(/seo|search|organic|content/.test(name))category='seo';
 if(/ads|paid|ppc|retarget/.test(name))category='ads';
 if(/social|linkedin|reputation/.test(name))category='social';
 const src=industry?'/images/'+industryPhotos[industry]+'-960.webp':isMarket?'/images/industry-travel-960.webp':'/visuals/'+category+'-3d.webp';
 const label=alt||(industry?asset?.alt||'Editorial photograph for '+industry.replace(/-/g,' '):isMarket?'Travel and global markets editorial photograph':({seo:'Premium 3D search and SEO illustration',ads:'Premium 3D advertising megaphone and audience target',social:'Premium 3D social media and conversation illustration',growth:'Premium 3D business growth and strategy illustration'}[category]));
 return <div className={'premium-visual hybrid-visual hybrid-'+(industry||isMarket?'photo':category)+(compact?' premium-compact':'')} data-visual-key={name}><img src={src} width="960" height="640" alt={label} loading={eager?'eager':'lazy'} decoding="async"/><div className="visual-story"><span className="visual-story-tag">{story.tag}</span><strong>{story.title}</strong><div className="visual-story-steps">{story.steps.map((step,index)=><span key={step}><b>0{index+1}</b>{step}</span>)}</div></div></div>;
}
