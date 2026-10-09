import Link from '@/components/navigation-link';
import { ArrowUpRight } from 'lucide-react';
import { markets } from '@/lib/markets';
import { Breadcrumb, CTA } from '@/components/blocks';
import { marketMeta } from '@/lib/site';
export const metadata=marketMeta('SEO & Digital Marketing Services Worldwide','Explore DMB’s SEO and performance marketing services across 26 countries, plus Dubai. India-based remote delivery with country-specific service plans.');
export default function Markets(){return <main id="main"><section className="page-intro"><Breadcrumb items={[{label:'Markets'}]}/><span className="eyebrow">Where we work</span><h1>Digital Marketing Services<br/><span>in India and Worldwide</span></h1><p>Digital Marketing Bureau (DMB) is based in India and works remotely with businesses across 26 countries, plus Dubai. Choose a market to explore SEO services, Google Ads management and lead generation around the customers you serve.</p></section><section className="section"><div className="industry-directory">{markets.map(m=><Link className="industry-card" href={'/markets/'+m.slug} key={m.slug}><span className="eyebrow">Market focus / {m.short}</span><h2>{m.name}</h2><p>{m.summary}</p><span className="card-bottom">Explore this market <ArrowUpRight size={22}/></span></Link>)}</div></section><CTA/></main>}
