import {services,industries} from '@/lib/content';
import {markets} from '@/lib/markets';
import {articles} from '@/lib/articles';

type Target={title:string;description:string;related?:{label:string;href:string}[]};
const short=(s:string,n=155)=>s.length>n?s.slice(0,n-1).replace(/\s+\S*$/,'')+'…':s;
const primary:Record<string,Target>={
 '/':{title:'Performance Marketing Agency & SEO Services | DMB',description:'Digital Marketing Bureau is an India-based performance marketing agency offering SEO, Google Ads, PPC, social media marketing and conversion optimization worldwide.',related:[{label:'SEO Services',href:'/seo-bureau'},{label:'PPC Management',href:'/ppc-bureau'},{label:'Social Media Marketing',href:'/smm-bureau'}]},
 '/services':{title:'Digital Marketing Services | SEO, PPC & SMM | DMB',description:'Explore digital marketing services including SEO, Google Ads management, paid social, landing pages, analytics and conversion optimization at DMB.'},
 '/seo-bureau':{title:'SEO Services | Technical, Local & AI SEO | DMB',description:'SEO services covering technical SEO audits, on-page SEO, local SEO, Google Business Profile, off-page outreach, AEO and GEO.'},
 '/ppc-bureau':{title:'PPC Management Agency | Google & Meta Ads | DMB',description:'PPC management services for Google Ads, Meta Ads and LinkedIn campaigns, supported by landing pages, conversion tracking and paid media strategy.'},
 '/smm-bureau':{title:'Social Media Marketing Agency & Services | DMB',description:'Social media marketing services for content planning, profile optimization, social media management and online reputation management.'},
 '/performance-marketing':{title:'Performance Marketing Services & Strategy | DMB',description:'Performance marketing services connecting PPC campaigns, conversion tracking, landing pages and qualified lead generation for growing businesses.'},
 '/organic-marketing':{title:'Organic Marketing & SEO Services | DMB',description:'Grow organic search visibility with technical SEO, local SEO, content strategy, on-page optimization and AI search visibility services.'},
 '/markets':{title:'International Digital Marketing Agency | DMB Markets',description:'Explore international SEO services, PPC management and digital marketing support for businesses across the US, UK, India, UAE and other markets.'},
 '/industries':{title:'Digital Marketing Services by Industry | DMB',description:'Explore SEO, PPC and social media marketing for real estate, healthcare, hospitality, travel, SaaS and other industries.'},
 '/blog':{title:'SEO, PPC & Performance Marketing Insights | DMB',description:'Practical SEO, Google Ads, lead generation and conversion optimization insights from Digital Marketing Bureau.'},
 '/about':{title:'About Digital Marketing Bureau | DMB Agency',description:'Learn about Digital Marketing Bureau, an India-based performance marketing agency serving businesses worldwide with SEO, PPC and social media services.'},
 '/contact':{title:'Contact Digital Marketing Bureau | SEO & PPC',description:'Talk to Digital Marketing Bureau about SEO, Google Ads, social media marketing, website conversion and performance marketing services.'}
};
const serviceTitles:Record<string,string>={
 'google-ads-management':'Google Ads Management Services & Audit',
 'paid-social-advertising':'Meta Ads & Paid Social Advertising Services',
 'landing-page-design':'Landing Page Design Services for Conversions',
 'conversion-optimization':'Conversion Rate Optimization (CRO) Services',
 'seo-bureau':'SEO Bureau Services',
 'b2b-lead-generation':'B2B Lead Generation Services',
 'linkedin-advertising':'LinkedIn Ads Management Services',
 'analytics-dashboards':'Marketing Analytics & Reporting Services',
 'website-speed-optimization':'Website Speed & Core Web Vitals Services',
 'marketing-automation':'Marketing Automation & Email Nurturing',
 'paid-media-strategy':'Paid Media Strategy & Retargeting Services',
 'social-media-content-management':'Social Media Management & Marketing Services',
 'online-reputation-management':'Online Reputation Management Services'
};
export function keywordTarget(pathname:string):Target|undefined{
 const path=pathname.replace(/\/+$/,'')||'/';
 if(primary[path])return primary[path];
 if(path.startsWith('/services/')){
  const slug=path.slice('/services/'.length),s=services.find(s=>s.slug===slug);
  if(!s)return;
  return {title:(serviceTitles[slug]||s.name)+' | DMB',description:short(s.metaDescription||s.summary)};
 }
 if(path.startsWith('/industries/')){
  const slug=path.slice('/industries/'.length),i=industries.find(i=>i.slug===slug);
  if(!i)return;
  return {title:i.name+' Digital Marketing & SEO Services | DMB',description:short(i.summary)};
 }
 if(path.startsWith('/markets/')){
  const parts=path.slice('/markets/'.length).split('/');
  if(parts.length!==1)return;
  const m=markets.find(m=>m.slug===parts[0]);if(!m)return;
  return {title:'SEO & Digital Marketing Services in '+m.name+' | DMB',description:short(m.summary)};
 }
 if(path.startsWith('/blog/')){
  const a=articles.find(a=>a.slug===path.slice('/blog/'.length));if(!a)return;
  return {title:a.title+' | DMB',description:short(a.summary)};
 }
}
function attr(s:string){return s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;')}
export function optimizeStaticSeo(html:string,pathname:string){
 const target=keywordTarget(pathname);if(!target)return html;
 const title=attr(target.title),description=attr(target.description);
 html=html.replace(/<title\b[^>]*>[\s\S]*?<\/title>/i,'<title>'+title+'</title>');
 function meta(key:'name'|'property',value:string,content:string){
  const re=new RegExp('<meta\\s+[^>]*'+key+'=["\\x27]'+value+'["\\x27][^>]*>','i');
  const tag='<meta '+key+'="'+value+'" content="'+content+'">';
  html=re.test(html)?html.replace(re,tag):html.replace(/<\/head>/i,tag+'</head>');
 }
 meta('name','description',description);
 meta('property','og:title',title);
 meta('property','og:description',description);
 meta('name','twitter:title',title);
 meta('name','twitter:description',description);
 // Retain localized canonical/hreflang values and existing content headings.
 return html;
}
