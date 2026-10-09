import Link from '@/components/navigation-link';
import { ArrowUpRight } from 'lucide-react';
import { industries } from '@/lib/content';
import { Breadcrumb, CTA } from '@/components/blocks';
import { pageMeta } from '@/lib/site';
export const metadata=pageMeta('Industry Marketing Services | SEO & Lead Generation','Explore marketing approaches for real estate, hospitality, healthcare, travel, SaaS, ecommerce and more. Services built around your business context.','/industries');
export default function Industries(){return <main id="main"><section className="page-intro"><Breadcrumb items={[{label:'Industries'}]}/><span className="eyebrow">Find your type of business</span><h1>Digital Marketing Services<br/><span>for Your Industry</span></h1><p>Industry marketing connects SEO, paid advertising and landing pages to the action your customers need to take. Explore plans for property viewings, hotel bookings, medical appointments, trip enquiries, demos and business leads.</p></section><section className="section"><div className="industry-directory">{industries.map((i,n)=><Link className="industry-card" href={'/industries/'+i.slug} key={i.slug}><span className="eyebrow">{String(n+1).padStart(2,'0')} / Business type</span><h2>{i.name}</h2><p>{i.summary}</p><span className="card-bottom">Explore your industry <ArrowUpRight size={22}/></span></Link>)}</div></section><CTA/></main>}
