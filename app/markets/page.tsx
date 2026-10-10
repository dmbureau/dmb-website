import {ThemeHero} from '@/components/theme-sections';
import {AnimatedHeading} from '@/components/animated-heading';
import {AnimatedImage} from '@/components/animated-image';
import Link from '@/components/navigation-link';
import { ArrowUpRight } from 'lucide-react';
import { markets } from '@/lib/markets';
import { Breadcrumb, CTA } from '@/components/blocks';
import { marketMeta } from '@/lib/site';
export const metadata=marketMeta('SEO & Digital Marketing Services Worldwide','Explore DMB’s SEO and performance marketing services across 26 countries, plus Dubai. India-based remote delivery with country-specific service plans.');
export default function Markets(){return <main id="main" className="theme-interior-page"><ThemeHero title={<>Digital Marketing Services<br/><span>in India and Worldwide</span></>} trail={[{label:'Markets'}]} kicker={<>Where we work</>} description={<>Digital Marketing Bureau (DMB) is based in India and works remotely with businesses across 26 countries, plus Dubai. Choose a market to explore SEO services, Google Ads management and lead generation around the customers you serve.</>}/><section className="section"><div className="industry-directory theme-project-grid">{markets.map((m,index)=><Link className="industry-card theme-project-card" href={'/markets/'+m.slug} key={m.slug}><AnimatedImage name={'market-'+m.slug} compact/><div className="theme-project-copy"><h2>{m.name}</h2><p>{m.summary}</p><span className="card-bottom">Explore this market <ArrowUpRight size={22}/></span></div></Link>)}</div></section><CTA/></main>}
