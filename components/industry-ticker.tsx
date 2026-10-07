'use client';
import {useState,type CSSProperties} from 'react';
import Link from '@/components/navigation-link';
import {ArrowUpRight,Pause,Play} from 'lucide-react';
export function IndustryTicker({items}:{items:{slug:string;name:string}[]}){
const[paused,setPaused]=useState(false);
return <div className={'industry-ticker'+(paused?' ticker-paused':'')} style={{'--ticker-duration':items.length*2+'s'} as CSSProperties}>
<div className="ticker-toolbar"><span>Explore all {items.length} industries</span><button type="button" onClick={()=>setPaused(!paused)} aria-label={paused?'Resume industry slides':'Pause industry slides'}>{paused?<Play size={15}/>:<Pause size={15}/>} {paused?'Play':'Pause'}</button></div>
<div className="ticker-window"><div className="ticker-track">{[0,1].map(copy=><div className="ticker-group" key={copy} aria-hidden={copy===1?true:undefined}>{items.map(i=><Link className="industry-ticker-card" key={i.slug} href={'/industries/'+i.slug} tabIndex={copy===1?-1:undefined}><span>{i.name}</span><ArrowUpRight size={20}/></Link>)}</div>)}</div></div></div>;
}
