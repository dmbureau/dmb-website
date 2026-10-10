import {origin} from '@/lib/site';
import {ServiceVisual} from '@/components/service-visual';
import {photoUrl} from '@/lib/photo-assets';
import { servicePhoto } from '@/lib/visuals';
import Link from '@/components/navigation-link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import type { Service } from '@/lib/content';
export function ServiceCard({service:s}: {service:Service}) {return <Link className="service-card theme-service-card" href={'/services/'+s.slug}><div className="theme-card-media"><ServiceVisual slug={s.slug} compact/></div><div className="theme-card-copy"><span className="eyebrow">{s.group}</span><h3>{s.name}</h3><p>{s.summary}</p><span className="theme-card-link">See what’s included <span className="theme-card-arrow"><ArrowUpRight size={20}/></span></span></div></Link>}
export function CTA({title='Ready for your next step?',text='Share your website and goal. Get a clear scope, fee and timeline.'}:{title?:string,text?:string}){return <section className="cta-band"><div><span className="eyebrow">Let’s get started</span><h2>{title}</h2><p>{text}</p></div><Link className="button button-dark" href="/contact">Get my plan <ArrowUpRight size={20}/></Link></section>}
export function Breadcrumb({items,includeHome=true}: {items:{label:string,href?:string}[];includeHome?:boolean}){const trail=includeHome?[{label:'Home',href:'/'},...items]:items;return <><nav className="breadcrumb" aria-label="Breadcrumb">{trail.map((i,n)=><span key={n}>{n>0&&<span aria-hidden="true">/</span>}{i.href?<Link href={i.href}>{i.label}</Link>:<span aria-current="page">{i.label}</span>}</span>)}</nav><Schema data={{'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:trail.map((i,n)=>({'@type':'ListItem',position:n+1,name:i.label,...(i.href?{item:new URL(i.href,origin).href}:{})}))}}/></>}
export function SectionTitle({kicker,title,text,href,linkText='Explore all'}:{kicker:string,title:string,text?:string,href?:string,linkText?:string}){return <div className="section-heading"><div><span className="eyebrow">{kicker}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>{href&&<Link className="text-link" href={href}>{linkText}<ArrowRight size={20}/></Link>}</div>}
export function CheckList({items}:{items:string[]}){return <ul className="check-list">{items.map(x=><li key={x}><Check size={17}/><span>{x}</span></li>)}</ul>}
export function Schema({data}:{data:unknown}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/>}
