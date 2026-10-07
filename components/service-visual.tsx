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
export function ServiceVisual({slug,compact=false}:{slug:string;compact?:boolean}){
const v=details[slug]||['Marketing plan','workflow','Goal → action → review',['Customer needs','Agreed work','Progress review']];
const Icon=v[1]==='map'?MapPin:v[1]==='search'?Search:v[1]==='tracking'?ChartNoAxesCombined:v[1]==='calendar'?CalendarDays:v[1]==='email'?Mail:v[1]==='website'?MousePointer2:v[1]==='ads'?Globe:Workflow;
return <figure className={'service-explainer visual-'+v[1]+(compact?' visual-compact':'')} aria-label={v[0]+' illustration'}>
<div className="visual-title"><span><Icon size={compact?23:28}/></span><strong>{v[0]}</strong></div>
{!compact&&<>{v[1]==='map'&&<svg className="business-map" viewBox="0 0 440 110" role="img" aria-label="Illustration of a local business on a map"><rect width="440" height="110" rx="10" fill="#e8eee5"/><path d="M0 40H440M100 0V110M315 0V110M0 100L400 0" stroke="#fff" strokeWidth="12"/><path d="M220 23c-16 0-28 12-28 28 0 22 28 44 28 44s28-22 28-44c0-16-12-28-28-28Z" fill="#376747"/><circle cx="220" cy="50" r="9" fill="#fff"/></svg>}<div className="visual-flow">{v[2]}</div><ul>{v[3].map(x=><li key={x}><Check size={16}/>{x}</li>)}</ul><figcaption>Illustration of the work—not a client account or result.</figcaption></>}
</figure>}
export function IndustryVisual({name,issues}:{name:string;issues:string[]}){return <figure className="service-explainer industry-explainer"><div className="visual-title"><span><Building2 size={28}/></span><strong>{name}</strong></div><div className="visual-flow">Customer need → relevant offer → enquiry</div><ul>{issues.slice(0,3).map(x=><li key={x}><ArrowRight size={16}/>{x}</li>)}</ul><figcaption>Marketing priorities for this business type.</figcaption></figure>}
