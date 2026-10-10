import {ThemeHero} from '@/components/theme-sections';
import {AnimatedHeading} from '@/components/animated-heading';
import {GrowthPaths} from '@/components/growth-paths';
import { DivisionCards } from '@/components/divisions';
import { Breadcrumb, CTA, SectionTitle } from '@/components/blocks';
import { ServiceDirectory } from '@/components/service-directory';
import { pageMeta } from '@/lib/site';
export const metadata=pageMeta('Digital Marketing Services | SEO, Paid Ads & Conversion','Explore connected digital marketing services: SEO, Google Ads, Meta Ads, social media, landing pages and analytics. Request a scope built around your business.','/services');
export default function Services(){return <main id="main" className="theme-interior-page"><ThemeHero title={<>Digital Marketing Services<br/><span>for Business Growth</span></>} trail={[{label:'Services'}]} kicker={<>Choose the work you need</>} description={<>Digital Marketing Bureau (DMB) connects SEO services, Google Ads management, paid social advertising, lead generation and conversion rate optimisation. Choose the service that addresses your current problem, then review its deliverables and next step.</>}/><section className="section growth-section"><GrowthPaths/></section><section className="section"><SectionTitle kicker="Specialist help, one bureau" title="Explore our service divisions."/><DivisionCards/></section><section className="section directory-section"><ServiceDirectory/></section><CTA/></main>}
