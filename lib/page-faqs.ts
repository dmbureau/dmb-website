import {services,industries} from '@/lib/content';
import {markets} from '@/lib/markets';
import {articles} from '@/lib/articles';

type QA={q:string;a:string};
const clean=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
function questions(path:string):QA[]{
 if(path==='/social-bureau')path='/smm-bureau';
 if(path==='/free-seo-audit')path='/dmb-audit';
 if(path.startsWith('/resources/'))path='/blog/'+path.split('/').pop();
 const localePath=path.match(/^\/markets\/([^/]+)\/[^/]+$/);
 if(localePath)path='/markets/'+localePath[1];
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
 if(keyed[path])return keyed[path];
 if(path==='/404')return [];
 if(path==='/faq')return []; // Dedicated FAQ page already holds its own answers.
 if(path==='/service'||path==='/single-service')return keyed['/services'];
 if(path==='/pricing-table'||path==='/packages')return [
  {q:'How are DMB marketing services priced?',a:'Pricing depends on the work agreed, access requirements and the level of ongoing support. We discuss the fee and deliverables before work begins.'},
  {q:'Can I choose a smaller scope before committing to ongoing work?',a:'We can review a specific issue or discuss a defined project scope before recommending a longer engagement.'}
 ];
 if(path==='/team'||path==='/single-team')return [
  {q:'Who leads Digital Marketing Bureau?',a:'Digital Marketing Bureau was founded in 2025 by Parmjeet Singh.'},
  {q:'Who will be responsible for my project?',a:'We discuss project responsibilities, deliverables and communication as part of agreeing the scope.'}
 ];
 if(path==='/project'||path==='/single-project')return [
  {q:'How does DMB approach client projects?',a:'We start with the business objective, agree the work and track the outcomes that can be measured with available data.'},
  {q:'Are the examples on this website guaranteed results?',a:'No. Examples illustrate possible approaches; marketing results vary by website, market, competition and client follow-up.'}
 ];
 if(path==='/blog-details'||path==='/resources')return keyed['/blog'];
 if(path.startsWith('/tools/'))return keyed['/tools'];
 return [];
}
function replaceExistingAccordion(html:string,items:QA[]):string{
 const faqStart=html.indexOf('id="ax-faq1"');
 if(faqStart<0)return html;
 const faqEnd=Math.min(html.length,faqStart+25000);
 const part=html.slice(faqStart,faqEnd);
 const accordionMatch=/<div class="accordion" id="([^"]+)">/.exec(part);
 if(!accordionMatch)return html;
 const start=faqStart+accordionMatch.index+accordionMatch[0].length;
 // Find the corresponding closing div, retaining the original yellow design and wrappers.
 const tag=/<\/?div\b[^>]*>/g;
 tag.lastIndex=start;
 let depth=1, end=-1, match:RegExpExecArray|null;
 while((match=tag.exec(html))!==null){
  if(match[0].startsWith('</div'))depth--;
  else depth++;
  if(depth===0){end=match.index;break;}
 }
 if(end<0)return html;
 const id=accordionMatch[1];
 const entries=items.map(({q,a},i)=>{
  const heading='dmb-faq-heading-'+i;
  const answer='dmb-faq-answer-'+i;
  return '<div class="accordion-item wow fadeInUp"><h3 class="accordion-header" id="'+heading+'"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#'+answer+'" aria-expanded="false" aria-controls="'+answer+'">'+clean(q)+'</button></h3><div id="'+answer+'" class="accordion-collapse collapse" aria-labelledby="'+heading+'" data-bs-parent="#'+id+'"><div class="accordion-body"><div class="bi-faq-text">'+clean(a)+'</div></div></div></div>';
 }).join('');
 let updated=html.slice(0,start)+entries+html.slice(end);
 // Correct old wording without changing other page headings.
 const first=updated.indexOf('id="ax-faq1"');
 const headEnd=updated.indexOf('class="ax-faq1-content"',first);
 if(headEnd>first){
  const head=updated.slice(first,headEnd).replace('Frequently Asked Answered','Frequently Asked Questions').replace('Popular Question','Popular Questions');
  updated=updated.slice(0,first)+head+updated.slice(headEnd);
 }
 return updated;
}
export function withPageFaq(html:string,path:string):string{
 // The homepage uses its own updated yellow accordion; do not add a second one.
 if(path==='/'||!html.includes('</body>')||html.includes('id="dmb-page-faq"'))return html;
 const items=questions(path);
 if(!items.length)return html;
 if(html.includes('id="ax-faq1"'))return replaceExistingAccordion(html,items);
 const rows=items.map(({q,a})=>'<details class="dmb-faq-item"><summary>'+clean(q)+'</summary><p>'+clean(a)+'</p></details>').join('');
 // Use the same warm-yellow visual language as the existing homepage FAQ.
 const block='<style id="dmb-faq-style">#dmb-page-faq{background:#ffedc9;color:#0e2033;padding:90px 22px}#dmb-page-faq .dmb-faq-inner{max-width:1085px;margin:0 auto}#dmb-page-faq .dmb-faq-kicker{display:block;text-align:center;font-weight:650;color:#14263a;margin:0 auto 20px}#dmb-page-faq h2{font-size:clamp(30px,3.5vw,48px);line-height:1.2;margin:0 0 38px;text-align:center;color:#0e2033}#dmb-page-faq .dmb-faq-item{border:0;border-top:1px solid #d2c4aa;background:transparent;margin:0;padding:0 10px}#dmb-page-faq .dmb-faq-item:last-child{border-bottom:1px solid #d2c4aa}#dmb-page-faq summary{cursor:pointer;font-size:clamp(18px,2vw,26px);font-weight:500;line-height:1.45;list-style:none;padding:29px 50px 29px 12px;position:relative}#dmb-page-faq summary::-webkit-details-marker{display:none}#dmb-page-faq summary:after{content:"+";position:absolute;right:5px;top:25px;border-radius:10px;background:#f2dfba;font-size:30px;line-height:40px;text-align:center;width:44px;height:44px}#dmb-page-faq details[open] summary:after{content:"−"}#dmb-page-faq p{font-size:17px;line-height:1.75;margin:0 10px 25px;color:#35413d}#dmb-page-faq summary:focus-visible{outline:3px solid #e96b4d;outline-offset:4px}@media(max-width:600px){#dmb-page-faq{padding:50px 16px}#dmb-page-faq summary{padding:22px 48px 22px 8px}#dmb-page-faq summary:after{top:19px}}</style><section id="dmb-page-faq" aria-label="Frequently asked questions"><div class="dmb-faq-inner"><span class="dmb-faq-kicker">Popular Questions</span><h2>Frequently Asked Questions</h2>'+rows+'</div></section>';
 return html.includes('<footer')?html.replace(/<footer\b/i,block+'<footer'):html.replace('</body>',block+'</body>');
}
