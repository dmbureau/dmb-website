'use client';
import {useEffect} from 'react';

// Load non-essential visual effects after the browser has painted and become idle.
// Navigation, forms, audits and tracking are not gated by this component.
export function ThemeMotion(){
 useEffect(()=>{
  if(document.querySelector('script[data-dmb-theme-motion]'))return;
  let cancelled=false;
  let idleId:number|undefined;
  let timeoutId:ReturnType<typeof setTimeout>|undefined;
  const load=()=>{
   if(cancelled||document.querySelector('script[data-dmb-theme-motion]'))return;
   const script=document.createElement('script');
   script.src='/marpixel-live/home.js';
   script.async=true;
   script.dataset.dmbThemeMotion='true';
   script.onload=()=>{
    if(cancelled)return;
    const motion=document.createElement('script');
    motion.src='/marpixel-live/motion/theme-motion.js';
    motion.async=true;
    document.body.appendChild(motion);
   };
   document.body.appendChild(script);
  };
  const schedule=()=>{
   if('requestIdleCallback' in window){
    idleId=window.requestIdleCallback(load,{timeout:3500});
   }else{
    timeoutId=setTimeout(load,1500);
   }
  };
  if(document.readyState==='complete')schedule();
  else window.addEventListener('load',schedule,{once:true});
  return ()=>{
   cancelled=true;
   window.removeEventListener('load',schedule);
   if(idleId!==undefined&&'cancelIdleCallback' in window)window.cancelIdleCallback(idleId);
   if(timeoutId!==undefined)clearTimeout(timeoutId);
  };
 },[]);
 return null;
}
