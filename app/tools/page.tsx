import {AnimatedHeading} from '@/components/animated-heading';
import {Breadcrumb,Schema} from '@/components/blocks';
import Link from '@/components/navigation-link';
import {auditTools} from '@/lib/audit-tools';
import {pageMeta,origin} from '@/lib/site';
export const metadata=pageMeta('SEO, Ads & Social Media Audit Tools','Choose a free SEO, Google Ads, Meta Ads, LinkedIn Ads or social media audit tool. Review website evidence, campaign exports and profile copy.','/tools');
export default function Tools(){return <main id="main"><section className="page-intro"><Breadcrumb items={[{label:'Audit tools'}]}/><span className="eyebrow">DMB tools</span><AnimatedHeading>Choose the Right Audit Tool</AnimatedHeading><p>Different channels need different evidence. Choose a focused tool and review the findings before deciding what to improve.</p></section><section className="section"><div className="division-grid">{auditTools.map(t=><Link className="division-card" href={'/tools/'+t.slug} key={t.kind}><h2>{t.name}</h2><p>{t.description}</p><span>Open tool →</span></Link>)}</div><p className="choice-help">For a combined website overview, use <Link href="/dmb-audit">DMB Audit</Link>.</p></section><Schema data={{'@context':'https://schema.org','@type':'CollectionPage',name:'DMB Audit Tools',url:origin+'/tools'}}/></main>}
