import {photoUrl} from '@/lib/photo-assets';
import Link from '@/components/navigation-link';
import { ArrowUpRight } from 'lucide-react';
import { divisions } from '@/lib/divisions';
export function DivisionCards(){return <div className="division-grid">{divisions.map(d=><Link className="division-card" href={'/'+d.slug} key={d.slug}><img className="division-photo" src={photoUrl((d.slug==='seo-bureau'?'find-your-business':d.slug==='ppc-bureau'?'reach-right-customers':'turn-visits-into-enquiries')+'-600')} width="600" height="375" alt="" loading="lazy" decoding="async"/><span className="eyebrow">A division of Digital Marketing Bureau</span><h3>{d.name}</h3><h4>{d.label}</h4><p>{d.description}</p><span>Explore {d.name} <ArrowUpRight size={19}/></span></Link>)}</div>}
