import {motionUrl,motionTheme,motionAlt} from '@/lib/animated-assets';
export function AnimatedImage({name,alt,eager=false,compact=false}:{name:string;alt?:string;eager?:boolean;compact?:boolean}) {
 const still=motionUrl(name,true);
 return <div className={'dmb-motion'+(compact?' dmb-motion-compact':'')}>
  <picture><source media="(prefers-reduced-motion: reduce)" srcSet={still}/><img src={motionUrl(name)} width={720} height={480} alt={alt||motionAlt[motionTheme(name)]} loading={eager?'eager':'lazy'} fetchPriority={eager?'high':undefined} decoding="async"/></picture>
 </div>
}
