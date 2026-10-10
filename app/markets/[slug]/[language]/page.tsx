import {AnimatedHeading} from '@/components/animated-heading';
import {AnimatedImage} from '@/components/animated-image';
import Link from '@/components/navigation-link';
import {notFound} from 'next/navigation';
import {marketTranslations,translatedMarket} from '@/lib/market-locales';
import {marketMeta,origin} from '@/lib/site';
import {MarketLanguageLinks} from '@/components/market-language-links';
import {Schema,Breadcrumb} from '@/components/blocks';
export function generateStaticParams(){return marketTranslations.map(page=>({slug:page.slug,language:page.language}))}
export async function generateMetadata({params}:{params:Promise<{slug:string,language:string}>}){const {slug,language}=await params;const page=translatedMarket(slug,language);if(!page)notFound();return marketMeta(page.headline,page.summary,slug,language)}
export default async function LocalizedMarket({params}:{params:Promise<{slug:string,language:string}>}){
 const {slug,language}=await params;const page=translatedMarket(slug,language);if(!page)notFound();const ui=page.ui;const url=origin+'/markets/'+slug+'/'+language;
 return <main id="main" lang={page.locale}>
 <section className="page-intro"><Breadcrumb includeHome={false} items={[{label:ui.markets+' · English',href:'/markets'},{label:page.name}]}/><MarketLanguageLinks slug={slug} label={ui.language} current={language}/><div className="market-hero-layout"><div><AnimatedHeading>{page.headline}</AnimatedHeading><p>{ui.intro}</p><a className="button" href="#market-contact">{ui.quote}</a></div><AnimatedImage name={'market-'+slug} eager/></div></section>
 <section className="section"><h2>{ui.help}</h2><p className="lead-paragraph">{page.context}</p><nav className="keyword-service-links" aria-label={ui.help}>{page.keywordServices.map(item=><Link key={item.label} href={'/services/'+item.slug}>{item.label}<span aria-hidden="true"> ↗</span></Link>)}</nav><div className="service-grid">{ui.services.map(([title,text])=><article className="service-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
 <section className="section"><h2>{ui.process}</h2><ol className="localized-market-steps">{ui.steps.map(step=><li key={step}>{step}</li>)}</ol></section>
 <section className="section"><h2>{ui.faq}</h2><div className="faq-list"><details open><summary>{ui.question}<span>+</span></summary><p>{ui.answer}</p></details><details><summary>{ui.costQ}<span>+</span></summary><p>{ui.costA}</p></details></div></section>
 <section className="cta-band" id="market-contact"><div><h2>{ui.quote}</h2><p>{ui.english}</p></div><Link className="button button-dark" href={'/contact?market='+encodeURIComponent(page.country)+'&language='+page.language}>{ui.quote} · <span lang="en">English</span></Link></section>
 <Schema data={{'@context':'https://schema.org','@type':'WebPage','@id':url+'#webpage',url,name:page.headline,description:page.summary,inLanguage:page.locale,isPartOf:{'@id':origin+'/#website'},mainEntity:{'@type':'Service',name:page.headline,areaServed:{'@type':'Country',name:page.country},provider:{'@id':origin+'/#organization'}}}}/>
 </main>;
}
