import {services,industries} from '@/lib/content';
import {markets} from '@/lib/markets';
import {articles} from '@/lib/articles';

type QA={q:string;a:string};
const clean=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
function questions(path:string):QA[]{
 const service=services.find(s=>path==='/services/'+s.slug);
 if(service)return [
  {q:'What does '+service.name+' include?',a:service.body},
  {q:'Who is '+service.name+' suitable for?',a:service.fit},
  {q:'How do you measure progress with '+service.name+'?',a:service.measure}
 ];
 const industry=industries.find(i=>path==='/industries/'+i.slug);
 if(industry)return [
  {q:'How can digital marketing help '+industry.name.toLowerCase()+' businesses?',a:industry.body},
  {q:'What should '+industry.name.toLowerCase()+' companies improve first?',a:'Start by understanding which enquiries fit your offer. Common issues include '+industry.problems.slice(0,2).join(' and ').toLowerCase()+'.'},
  {q:'Does DMB use the same plan for every '+industry.name.toLowerCase()+' business?',a:'No. The plan depends on your market, audience, available data and commercial goals. We agree the scope before starting.'}
 ];
 const market=markets.find(m=>path==='/markets/'+m.slug);
 if(market)return [
  {q:'Does DMB offer digital marketing for businesses targeting '+market.name+'?',a:'Yes. We are based in India and can support businesses targeting '+market.name+' remotely. A market page does not imply a physical office in that country.'},
  {q:'What is included in a '+market.name+' marketing plan?',a:market.summary},
  {q:'How do you adapt marketing for '+market.name+'?',a:market.context}
 ];
 const article=articles.find(a=>path==='/blog/'+a.slug||path==='/resources/'+a.slug);
 if(article)return [
  {q:'What is this guide about?',a:article.summary},
  {q:'What should I check before acting on this advice?',a:'Review your own website, campaign data, audience and lead quality. The guide explains useful checks, but the right action depends on what your evidence shows.'}
 ];
 const keyed:Record<string,QA[]>={
  '/':[
   {q:'What services does Digital Marketing Bureau offer?',a:'DMB offers technical and local SEO, AI search optimisation, Google and paid social ads, social media marketing, LinkedIn and B2B lead generation, content marketing, CRO, reporting and marketing automation.'},
   {q:'Where is DMB based, and can you work internationally?',a:'DMB is based in India and works with businesses targeting international markets. Our market pages describe services we can provide remotely.'},
   {q:'How does DMB start a new marketing project?',a:'We review your offer, target customers and current marketing setup, then agree the scope, responsibilities, timeline and reporting before work begins.'}
  ],
  '/about':[
   {q:'When was Digital Marketing Bureau founded?',a:'DMB was founded in India in 2025 by Parmjeet Singh.'},
   {q:'How many international projects has DMB completed?',a:'DMB reports completing more than 500 international projects in its first year. This is a company-reported milestone, not an independently audited claim about client results.'},
   {q:'What are SEO Bureau, PPC Bureau and SMM Bureau?',a:'They are DMB’s specialist service divisions for organic search, paid advertising and social media marketing.'}
  ],
  '/seo-bureau':[
   {q:'What SEO services does SEO Bureau provide?',a:'SEO Bureau covers technical SEO, website indexing, on-page content, local SEO, Google Business Profile work, website migrations and AI search visibility.'},
   {q:'Can SEO Bureau guarantee a number-one Google ranking?',a:'No. Rankings depend on competition, search intent, site quality and search engine decisions. We focus on useful improvements and transparent measurement.'},
   {q:'How do you decide what SEO work comes first?',a:'We review indexing, technical obstacles, service pages and search intent, then prioritise issues likely to affect relevant visibility and enquiries.'}
  ],
  '/ppc-bureau':[
   {q:'Which paid advertising platforms does PPC Bureau support?',a:'DMB supports Google Ads, Meta advertising and LinkedIn paid campaigns, depending on audience, goals and budget.'},
   {q:'How do you evaluate PPC performance?',a:'We look beyond clicks to conversion tracking, enquiry relevance, costs and sales information your team can reliably provide.'},
   {q:'Do I need landing pages for paid advertising?',a:'Not always, but campaigns work best when visitors arrive on a page that clearly matches the ad and makes the next step easy.'}
  ],
  '/smm-bureau':[
   {q:'What does SMM Bureau do?',a:'SMM Bureau supports social media strategy, business profiles, content planning, social communication and online reputation work.'},
   {q:'Which social platforms should my business focus on?',a:'That depends on where your customers research and engage. We review the audience, services and resources before recommending channels.'},
   {q:'Does social media marketing guarantee sales?',a:'No. Content, targeting, website experience and response time all influence whether attention turns into enquiries.'}
  ],
  '/services':[
   {q:'Can DMB combine multiple digital marketing services?',a:'Yes. SEO, PPC, social media, LinkedIn outreach, content, CRO and analytics can be planned together where the business needs them.'},
   {q:'Do I have to purchase every service?',a:'No. The right scope depends on your goals, current marketing setup and priorities. We recommend services relevant to the problem you want to solve.'}
  ],
  '/industries':[{q:'Does DMB use industry-specific marketing strategies?',a:'Yes. Search intent, compliance needs, buyer questions and conversion journeys differ across sectors, so recommendations vary by industry.'},{q:'Which industries does DMB support?',a:'DMB supports real estate, healthcare, hospitality, travel, SaaS, ecommerce, education and other service businesses.'}],
  '/markets':[{q:'Can DMB serve companies outside India?',a:'Yes. DMB provides remote digital marketing support for businesses targeting markets including the US, UK, UAE, Canada, Australia and others.'},{q:'Is DMB locally headquartered in every listed market?',a:'No. DMB is based in India. Market pages describe geographic targeting, not physical office locations.'}],
  '/contact':[{q:'What should I include in my enquiry?',a:'Share your website, service, target market, current marketing challenge and the outcome you want to improve.'},{q:'Will DMB recommend a service before reviewing my business?',a:'We aim to understand your existing marketing and goals before recommending a project scope.'}],
  '/performance-marketing':[{q:'What is performance marketing?',a:'Performance marketing connects paid and organic activity with measurable actions, such as relevant leads and conversions, rather than looking at impressions alone.'},{q:'How does DMB track performance?',a:'We review available analytics, conversion events and the quality of enquiries, and explain what the data cannot confirm.'}],
  '/organic-marketing':[{q:'What is included in organic marketing?',a:'Depending on your needs, organic work can include technical SEO, helpful content, local visibility and improving how customers discover your services.'},{q:'How quickly does organic visibility improve?',a:'Timelines vary by the website, competition, technical issues and content quality. No specific ranking or lead outcome is guaranteed.'}],
  '/blog':[{q:'What topics do DMB guides cover?',a:'Our guides focus on SEO, paid advertising, landing pages, international marketing and lead measurement.'},{q:'Are blog guides a substitute for a website audit?',a:'No. They offer practical guidance; recommendations for your business should follow a review of your own website and data.'}],
  '/dmb-audit':[{q:'What can a website audit identify?',a:'An audit can highlight technical, content, user experience and measurement issues using the accessible website and available inputs.'},{q:'Does a free audit guarantee more traffic?',a:'No. An audit identifies potential issues and next steps, not guaranteed ranking, traffic or lead outcomes.'}],
  '/privacy':[{q:'Where can I ask a privacy question?',a:'Use the contact page to ask DMB about the information submitted through website forms or the handling of your enquiry.'}],
  '/tools':[{q:'What are DMB marketing tools for?',a:'They help identify potential website, SEO or advertising issues and suggest areas for closer review.'},{q:'Are automated tool results final recommendations?',a:'No. They are starting points and should be checked against your business objectives and available evidence.'}]
 };
 return keyed[path]||[];
}
export function withPageFaq(html:string,path:string):string{
 if(!html.includes('</body>')||html.includes('id="dmb-page-faq"'))return html;
 const items=questions(path);
 if(!items.length)return html;
 const rows=items.map(({q,a})=>'<details class="dmb-faq-item"><summary>'+clean(q)+'</summary><p>'+clean(a)+'</p></details>').join('');
 const block='<style id="dmb-faq-style">#dmb-page-faq{background:#f7f9f7;color:#173b35;padding:72px 22px}#dmb-page-faq .dmb-faq-inner{max-width:960px;margin:0 auto}#dmb-page-faq h2{font-size:clamp(28px,3vw,40px);line-height:1.25;margin:0 0 25px;color:#173b35}#dmb-page-faq .dmb-faq-item{margin:10px 0;border:1px solid #dbe4df;border-radius:12px;background:#fff;padding:0 22px}#dmb-page-faq summary{cursor:pointer;font-weight:650;font-size:18px;line-height:1.5;padding:20px 6px;list-style-position:outside}#dmb-page-faq p{font-size:16px;line-height:1.75;margin:0 0 20px;color:#344941}#dmb-page-faq details[open]{border-color:#a0c4b4}</style><section id="dmb-page-faq" aria-label="Frequently asked questions"><div class="dmb-faq-inner"><h2>Frequently Asked Questions</h2>'+rows+'</div></section>';
 return html.includes('<footer')?html.replace(/<footer\b/i,block+'<footer'):html.replace('</body>',block+'</body>');
}
