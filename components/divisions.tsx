import {ServiceVisual} from '@/components/service-visual';
import {photoUrl} from '@/lib/photo-assets';
import Link from '@/components/navigation-link';
import { ArrowUpRight } from 'lucide-react';
import { divisions } from '@/lib/divisions';
export function DivisionCards(){return <div className="division-grid">{divisions.map(d=><Link className="division-card" href={'/'+d.slug} key={d.slug}><ServiceVisual slug={d.slug==='seo-bureau'?'on-page-seo':d.slug==='ppc-bureau'?'google-ads-management':'social-media-strategy'} compact/><span className="eyebrow">A division of Digital Marketing Bureau</span><h3>{d.name}</h3><h4>{d.label}</h4><p>{d.description}</p><span>Explore {d.name} <ArrowUpRight size={19}/></span></Link>)}</div>}
