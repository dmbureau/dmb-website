import {GrowthPaths} from '@/components/growth-paths';
import { DivisionCards } from '@/components/divisions';
import { Breadcrumb, CTA, SectionTitle } from '@/components/blocks';
import { ServiceDirectory } from '@/components/service-directory';
import { pageMeta } from '@/lib/site';
export const metadata=pageMeta('Digital Marketing Services | SEO, Paid Ads & Conversion','Explore 27 digital marketing services: SEO, Google Ads, Meta Ads, social media, landing pages and analytics. Request a scope built around your business.','/services');
export default function Services(){return <main id="main"><section className="page-intro"><Breadcrumb items={[{label:'Services'}]}/><span className="eyebrow">27 ways we can help</span><h1>Marketing services built around<br/><span>your next customer.</span></h1><p>Find the SEO, advertising or website support that matches your immediate challenge. Explore deliverables, understand what is needed and request a tailored quote.</p></section><section className="section growth-section"><GrowthPaths/></section><section className="section"><SectionTitle kicker="Specialist help, one bureau" title="Explore our service divisions."/><DivisionCards/></section><section className="section directory-section"><ServiceDirectory/></section><CTA/></main>}
