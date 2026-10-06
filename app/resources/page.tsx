import Link from '@/components/navigation-link';
import { ArrowUpRight } from 'lucide-react';
import { articles } from '@/lib/articles';
import { Breadcrumb, CTA } from '@/components/blocks';
import { pageMeta } from '@/lib/site';
export const metadata=pageMeta('Marketing Guides for Better Business Decisions','Practical guides on wasted ad spend, website conversion, qualified leads and international service content. Connect the diagnosis to the next action.','/resources');
export default function Resources(){return <main id="main"><section className="page-intro"><Breadcrumb items={[{label:'Guides'}]}/><span className="eyebrow">Learn about online marketing</span><h1>Real marketing problems.<br/><span>Practical next steps.</span></h1><p>Understand common marketing problems and what to check before paying for more ads or website changes.</p></section><section className="section"><div className="article-list">{articles.map((a,n)=><Link href={'/resources/'+a.slug} key={a.slug}><span className="article-index">0{n+1}</span><div><span className="eyebrow">{a.category} / {a.read} read</span><h2>{a.title}</h2><p>{a.summary}</p></div><ArrowUpRight size={29}/></Link>)}</div></section><CTA/></main>}
