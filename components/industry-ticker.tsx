'use client';
import {type CSSProperties} from 'react';
import Link from '@/components/navigation-link';
import {ArrowUpRight} from 'lucide-react';
export function IndustryTicker({items}:{items:{slug:string;name:string}[]}){
return <div className="industry-ticker" style={{'--ticker-duration':items.length*6+'s'} as CSSProperties}>
<div className="ticker-toolbar"><span>Explore all {items.length} industries</span></div>
<div className="ticker-window"><div className="ticker-track">{[0,1].map(copy=><div className="ticker-group" key={copy} aria-hidden={copy===1?true:undefined}>{items.map(i=><Link className="industry-ticker-card" key={i.slug} href={'/industries/'+i.slug} tabIndex={copy===1?-1:undefined}><span>{i.name}</span><ArrowUpRight size={20}/></Link>)}</div>)}</div></div></div>;
}
