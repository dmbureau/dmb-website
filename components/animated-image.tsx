import {getVisualStory} from '@/components/premium-visual';
import catalog from '@/content/image-catalog.json';
const industryPhotos:Record<string,string>={'real-estate':'website-design','hospitality':'campaign-analysis','healthcare':'search-work','travel':'creative-camera','saas':'computer-work','ecommerce':'mobile-experience','professional-services':'content-planning','home-services':'customer-conversation','education':'strategy-board','recruitment':'business-meeting','logistics':'technical-code','solar':'data-review'};
const industryAlts:Record<string,string>={'real-estate':'Website and landing page design to support property viewing enquiries','hospitality':'Campaign analytics review for hotel advertising and booking enquiries','healthcare':'Website content and search review for healthcare service discovery','travel':'Creative production for travel marketing campaigns','saas':'Website and product experience development for SaaS demo enquiries','ecommerce':'Mobile website experience review for ecommerce customers','professional-services':'Planning useful service content for professional services marketing','home-services':'Discussing customer enquiries and follow-up for home services','education':'Marketing planning and campaign review for education enquiries','recruitment':'Business discussion about audience and candidate acquisition','logistics':'Website tracking and technical implementation for logistics marketing','solar':'Marketing data review to identify useful solar customer enquiries'};

export function AnimatedImage({name,alt,compact=false,eager=false}:{name:string;alt?:string;eager?:boolean;compact?:boolean}) {
 const serviceKeys=Object.keys(catalog.cards).sort((a,b)=>b.length-a.length);
 const service=serviceKeys.find(key=>name.includes(key));
 const cardAsset=service?(catalog.assets as Record<string,{photoId?:string;alt:string}>)[(catalog.cards as Record<string,string>)[service]]:undefined;
 const featurePhotos:Record<string,string>={'goal-search-discovery':'campaign-analysis','seo-bureau':'search-work','ppc-bureau':'campaign-analysis','social-bureau':'creative-camera','organic-marketing':'content-planning','performance-marketing':'strategy-board'};
 const storyNames:Record<string,string>={'goal-search-discovery':'on-page-seo','seo-bureau':'on-page-seo','ppc-bureau':'google-ads-management','social-bureau':'social-media-strategy','organic-marketing':'content-strategy','performance-marketing':'paid-media-strategy'};
 const story=getVisualStory(storyNames[name]||name);
 const asset=(catalog.assets as Record<string,{local?:string;photoId?:string;alt:string}>)[name];
 const industry=(name.includes('industry')||name.startsWith('carousel-'))?Object.keys(industryPhotos).find(key=>name.includes(key)):undefined;
 const isMarket=name.includes('market');
 let category='growth';
 if(/seo|search|organic|content/.test(name))category='seo';
 if(/ads|paid|ppc|retarget/.test(name))category='ads';
 if(/social|linkedin|reputation/.test(name))category='social';
 const src=featurePhotos[name]?'/images/'+featurePhotos[name]+'-960.webp':industry?'/images/'+industryPhotos[industry]+'-960.webp':isMarket?'/images/strategy-board-960.webp':cardAsset?.photoId?'https://images.unsplash.com/photo-'+cardAsset.photoId+'?auto=format&fit=crop&w=960&q=80':service==='online-reputation-management'?'/images/customer-conversation-960.webp':name==='home-priority'?'/images/website-design-960.webp':name==='home-plan'?'/images/strategy-board-960.webp':asset?.photoId?'https://images.unsplash.com/photo-'+asset.photoId+'?auto=format&fit=crop&w=960&q=80':asset?.local&&!/^(explain-|bureau-|gbp-|migration-plan|organic-journey|performance-journey|conversion-review)/.test(asset.local)?'/images/'+asset.local+'-960.webp':'/images/business-meeting-960.webp';
 const label=(featurePhotos[name]?'Editorial photograph of '+featurePhotos[name].replace(/-/g,' '):undefined)||alt||cardAsset?.alt||asset?.alt||(industry?industryAlts[industry]:isMarket?'Travel and global markets editorial photograph':'Marketing planning and business workspace');
 return <div className={'premium-visual hybrid-visual hybrid-'+'photo'+(compact?' premium-compact':'')} data-visual-key={name}><img src={src} width="960" height="640" alt={label} loading={eager?'eager':'lazy'} decoding="async"/></div>;
}
