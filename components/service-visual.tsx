import media from '@/content/media.json';
import {MapPin,Search,MousePointer2,ChartNoAxesCombined,Workflow,Mail,CalendarDays,Globe,Check,ArrowRight,Building2} from 'lucide-react';
const details:Record<string,[string,string,string,string[]]>={
'google-ads-audit':['Google Ads review','audit','Searches → spend → enquiries',['Search terms','Conversion checks','Priority fixes']],
'google-ads-management':['Google Ads campaigns','ads','Search → ad → landing page',['Buying-intent keywords','Relevant ad','Enquiry tracking']],
'paid-social-advertising':['Meta advertising','social','Audience → creative → enquiry',['Audience fit','Creative tests','Lead quality']],
'lead-quality-optimization':['Lead qualification','tracking','Enquiry → fit check → sales',['Service need','Location fit','Sales feedback']],
'landing-page-design':['Landing page layout','website','Offer → evidence → contact',['Clear headline','Relevant proof','Short form']],
'conversion-rate-audit':['Website journey review','website','Visit → decision → enquiry',['Clear offer','Usable buttons','Working forms']],
'conversion-tracking-setup':['Conversion event map','tracking','Successful action → event → report',['Form success','Deduplication','GA4 verification']],
'technical-seo-audit':['Technical SEO checks','search','Discover → crawl → index',['Working URLs','Canonical signals','Indexing checks']],
'on-page-seo':['Service page SEO','search','Question → answer → next step',['Page intent','Useful headings','Internal links']],
'local-seo':['Local SEO & Google Business Profile','map','Local search → listing → contact',['Accurate business details','Genuine service areas','Website & contact links']],
'google-business-profile':['Google Business Profile','map','Business information → customer action',['Categories & services','Approved photos','Website & booking links']],
'seo-migration-support':['Website migration map','workflow','Old URL → relevant new URL',['URL inventory','Redirect mapping','Post-launch checks']],
'organic-traffic-recovery':['Organic search investigation','search','Trend → cause → action',['Search Console data','Site changes','Priority fixes']],
'content-strategy':['Customer question map','calendar','Buying question → useful page',['Service searches','Content briefs','Relevant links']],
'ai-search-visibility':['AI search visibility','search','Accessible page → clear answer → source',['Direct answers','Business identity','Source references']],
'b2b-lead-generation':['B2B enquiry journey','workflow','Company fit → need → conversation',['Target companies','Relevant offer','Sales handover']],
'linkedin-advertising':['LinkedIn campaign plan','ads','Role → message → enquiry',['Job role fit','Company profile','Lead qualification']],
'retargeting-campaigns':['Retargeting journey','workflow','Eligible visit → helpful reminder',['Consent settings','Audience exclusions','Frequency review']],
'email-lead-nurturing':['Email follow-up plan','email','Enquiry → useful answer → next step',['Relevant sequence','Clear consent','Response review']],
'analytics-dashboards':['Marketing measurement map','tracking','Source → enquiry → outcome',['Agreed definitions','Data quality','Attribution limits']],
'website-speed-optimization':['Website performance checks','website','Load → interact → stable layout',['LCP: loading','INP: interaction','CLS: stability']],
'seo-second-opinion':['Independent SEO review','search','Current work → evidence → priorities',['Important pages','Useful reporting','Next priorities']],
'marketing-automation':['Enquiry workflow','workflow','New enquiry → owner → follow-up',['Routing rules','Failure handling','Test records']],
'paid-media-strategy':['Advertising plan','ads','Market → offer → campaign',['Channel roles','Budget planning','Review criteria']],
'social-media-strategy':['Social media plan','calendar','Customer question → post → action',['Content themes','Suitable platforms','Business goals']],
'social-profile-setup':['Social profile essentials','social','Brand → services → contact',['Approved brand assets','Clear profile details','Working links']],
'social-media-content-management':['Social content calendar','calendar','Brief → approval → publish',['Useful topics','Approved posts','Regular reporting']]
};

const imageByService:Record<string,[string,string]>={
'google-ads-audit':['data-review','Reviewing campaign numbers and advertising costs'],
'google-ads-management':['campaign-analysis','Analytics screen used to illustrate campaign measurement'],
'paid-social-advertising':['mobile-experience','Social media apps on a smartphone'],
'lead-quality-optimization':['customer-conversation','Discussing customer needs and suitable enquiries'],
'landing-page-design':['website-design','Website design displayed alongside development tools'],
'conversion-rate-audit':['email-work','Reviewing a website experience on a laptop'],
'conversion-tracking-setup':['technical-code','Code review for website event tracking'],
'technical-seo-audit':['computer-work','Technical website work on a computer'],
'on-page-seo':['search-work','Laptop and notebook used for reviewing website content'],
'local-seo':['gbp-local','Illustrated Google Business Profile and local map; example business'],
'google-business-profile':['gbp-profile','Illustrated business profile information; example business'],
'seo-migration-support':['laptop-design','Planning website changes across connected devices'],
'organic-traffic-recovery':['understand-marketing-results','Reviewing website analytics trends'],
'content-strategy':['content-planning','Writing and planning useful website content'],
'ai-search-visibility':['technical-code','Website code used to illustrate accessible online content'],
'b2b-lead-generation':['business-meeting','Business team discussing customer requirements'],
'linkedin-advertising':['customer-conversation','Professional discussion about a business offer'],
'retargeting-campaigns':['mobile-experience','Mobile experience used to illustrate returning customer journeys'],
'email-lead-nurturing':['email-work','Reviewing digital content and customer follow-up'],
'analytics-dashboards':['campaign-analysis','Data dashboard illustrating marketing measurement'],
'website-speed-optimization':['computer-work','Technical work to improve website performance'],
'seo-second-opinion':['data-review','Independent review of business data and reports'],
'marketing-automation':['laptop-design','Connected devices used in a digital working process'],
'paid-media-strategy':['strategy-board','Planning business priorities and advertising work'],
'social-media-strategy':['content-planning','Planning content topics before publishing'],
'social-profile-setup':['mobile-experience','Social apps and business communication on mobile'],
'social-media-content-management':['creative-camera','Camera equipment for producing social media content']
};
export function EditorialImage({name,alt,eager=false}:{name:string;alt:string;eager?:boolean}){
const override=media.images.find(i=>i.name===name);return <img src={override?.image||'/images/'+name+'-960.webp'} srcSet={override?.image?undefined:'/images/'+name+'-480.webp 480w, /images/'+name+'-960.webp 960w'} sizes="(max-width:640px) 92vw, (max-width:1000px) 46vw, 560px" width={960} height={640} alt={override?.alt||alt} loading={eager?'eager':'lazy'} fetchPriority={eager?'high':undefined} decoding="async"/>;
}
export function ServiceVisual({slug,compact=false,eager=false}:{slug:string;compact?:boolean;eager?:boolean}){
const [name,alt]=imageByService[slug]||['strategy-board','Planning a focused marketing strategy'];
return <figure className={'service-photograph'+(compact?' photograph-compact':'')}><EditorialImage name={name} alt={alt} eager={eager}/>{!compact&&<figcaption>{name.startsWith('gbp-')?'Illustration of profile features. Example business; no client results.':'Illustrative stock photograph; not a DMB team or client account.'}</figcaption>}</figure>;
}
const industryImages:Record<string,string>={'Real Estate':'industry-real-estate','Hospitality':'industry-hospitality','Healthcare':'industry-healthcare','Travel & Tourism':'industry-travel','SaaS & Technology':'computer-work','Ecommerce':'industry-ecommerce','Professional Services':'legal','Home Services':'construction','Education & Training':'education','Recruitment & Staffing':'business-meeting','Logistics & Supply Chain':'logistics','Solar & Energy Services':'solar-energy'};
export function IndustryVisual({name,issues}:{name:string;issues:string[]}){return <figure className="service-photograph industry-photograph"><EditorialImage name={industryImages[name]||'customer-conversation'} alt={name+' business setting'} eager/><figcaption>Illustrative industry photograph.</figcaption></figure>;}
