'use client';
import {useEffect,useState} from 'react';
import {motionUrl,motionTheme,motionAlt} from '@/lib/animated-assets';
export function AnimatedImage({name,alt,eager=false,compact=false}:{name:string;alt?:string;eager?:boolean;compact?:boolean}) {
 const [paused,setPaused]=useState(false);
 const [globalPaused,setGlobalPaused]=useState(false);
 useEffect(()=>{const sync=()=>setGlobalPaused(document.documentElement.dataset.motion==='paused');sync();window.addEventListener('dmb-motion-change',sync);return()=>window.removeEventListener('dmb-motion-change',sync)},[]);
 const still=motionUrl(name,true);
 return <div className={'dmb-motion'+(compact?' dmb-motion-compact':'')}>
  <picture><source media="(prefers-reduced-motion: reduce)" srcSet={still}/><img src={paused||globalPaused?still:motionUrl(name)} width={720} height={480} alt={alt||motionAlt[motionTheme(name)]} loading={eager?'eager':'lazy'} fetchPriority={eager?'high':undefined} decoding="async"/></picture>
  {!compact&&<button type="button" className="motion-control" aria-label={paused?'Play illustration animation':'Pause illustration animation'} aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused?'Play animation':'Pause animation'}</button>}
 </div>
}
