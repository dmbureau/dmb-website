import {ThemeHero} from '@/components/theme-sections';
import {AnimatedHeading} from '@/components/animated-heading';
import {AnimatedImage} from '@/components/animated-image';
import Link from '@/components/navigation-link';
import { ArrowUpRight } from 'lucide-react';
import { industries } from '@/lib/content';
import { Breadcrumb, CTA } from '@/components/blocks';
import { pageMeta } from '@/lib/site';
export const metadata=pageMeta('Industry Marketing Services | SEO & Lead Generation','Explore marketing approaches for real estate, hospitality, healthcare, travel, SaaS, ecommerce and more. Services built around your business context.','/industries');
export default function Industries(){return <main id="main" className="theme-interior-page"><ThemeHero title={<>Digital Marketing Services<br/><span>for Your Industry</span></>} trail={[{label:'Industries'}]} kicker={<>Find your type of business</>} description={<>Industry marketing connects SEO, paid advertising and landing pages to the action your customers need to take. Explore plans for property viewings, hotel bookings, medical appointments, trip enquiries, demos and business leads.</>}/><section className="section"><div className="industry-directory theme-project-grid">{industries.map((i,n)=><Link className="industry-card theme-project-card" href={'/industries/'+i.slug} key={i.slug}><AnimatedImage name={i.slug+'-industry'} compact/><div className="theme-project-copy"><span className="eyebrow">Industry marketing</span><h2>{i.name}</h2><p>{i.summary}</p><span className="card-bottom">Explore your industry <ArrowUpRight size={22}/></span></div></Link>)}</div></section><CTA/></main>}
