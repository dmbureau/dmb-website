import {GrowthPaths} from '@/components/growth-paths';
import { DivisionCards } from '@/components/divisions';
import { Breadcrumb, CTA, SectionTitle } from '@/components/blocks';
import { ServiceDirectory } from '@/components/service-directory';
import { pageMeta } from '@/lib/site';
export const metadata=pageMeta('Digital Marketing Services | SEO, Paid Ads & Conversion','Explore 27 digital marketing services: SEO, Google Ads, Meta Ads, social media, landing pages and analytics. Request a scope built around your business.','/services');
export default function Services(){return <main id="main"><section className="page-intro"><Breadcrumb items={[{label:'Services'}]}/><span className="eyebrow">27 ways we can help</span><h1>Digital Marketing Services<br/><span>for Business Growth</span></h1><p>Choose SEO, ads, social media or website support. Each service explains the scope and next step.</p></section><section className="section growth-section"><GrowthPaths/></section><section className="section"><SectionTitle kicker="Specialist help, one bureau" title="Explore our service divisions."/><DivisionCards/></section><section className="section directory-section"><ServiceDirectory/></section><CTA/></main>}
