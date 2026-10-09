import Link from '@/components/navigation-link';
import { ArrowUpRight } from 'lucide-react';
import { markets } from '@/lib/markets';
import { Breadcrumb, CTA } from '@/components/blocks';
import { marketMeta } from '@/lib/site';
export const metadata=marketMeta('Digital Marketing for India, US, UK, UAE, Dubai & Kuwait','Explore DMB’s international marketing services for India, the United States, United Kingdom, UAE, Dubai and Kuwait. Remote delivery with market-specific scope.');
export default function Markets(){return <main id="main"><section className="page-intro"><Breadcrumb items={[{label:'Markets'}]}/><span className="eyebrow">Where we work</span><h1>Digital Marketing Services<br/><span>in India and Worldwide</span></h1><p>India-based, with remote delivery for these markets. Choose the services that fit your customers.</p></section><section className="section"><div className="industry-directory">{markets.map(m=><Link className="industry-card" href={'/markets/'+m.slug} key={m.slug}><span className="eyebrow">Market focus / {m.short}</span><h2>{m.name}</h2><p>{m.summary}</p><span className="card-bottom">Explore this market <ArrowUpRight size={22}/></span></Link>)}</div></section><CTA/></main>}
