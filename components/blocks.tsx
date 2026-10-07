import {ServiceVisual} from '@/components/service-visual';
import {photoUrl} from '@/lib/photo-assets';
import { servicePhoto } from '@/lib/visuals';
import Link from '@/components/navigation-link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import type { Service } from '@/lib/content';
export function ServiceCard({service:s}: {service:Service}) {return <Link className="service-card" href={'/services/'+s.slug}><ServiceVisual slug={s.slug} compact/><div className="card-top"><span>{s.group}</span></div><h3>{s.name}</h3><p>{s.summary}</p><span className="card-bottom">See what’s included <ArrowUpRight size={22}/></span></Link>}
export function CTA({title='Ready for your next step?',text='Share your website and goal. Get a clear scope, fee and timeline.'}:{title?:string,text?:string}){return <section className="cta-band"><div><span className="eyebrow">Let’s get started</span><h2>{title}</h2><p>{text}</p></div><Link className="button button-dark" href="/contact">Get my plan <ArrowUpRight size={20}/></Link></section>}
export function Breadcrumb({items}: {items:{label:string,href?:string}[]}){return <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link>{items.map((i,n)=><span key={n}><span aria-hidden="true">/</span>{i.href?<Link href={i.href}>{i.label}</Link>:<span aria-current="page">{i.label}</span>}</span>)}</nav>}
export function SectionTitle({kicker,title,text,href,linkText='Explore all'}:{kicker:string,title:string,text?:string,href?:string,linkText?:string}){return <div className="section-heading"><div><span className="eyebrow">{kicker}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>{href&&<Link className="text-link" href={href}>{linkText}<ArrowRight size={20}/></Link>}</div>}
export function CheckList({items}:{items:string[]}){return <ul className="check-list">{items.map(x=><li key={x}><Check size={17}/><span>{x}</span></li>)}</ul>}
export function Schema({data}:{data:unknown}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/>}
