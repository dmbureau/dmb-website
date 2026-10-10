'use client';
import {useEffect,useRef} from 'react';
import {usePathname} from 'next/navigation';
export function GoogleAnalytics(){
 const pathname=usePathname();
 const previous=useRef<string|null>(null);
 useEffect(()=>{
  const location=window.location.href;
  if(previous.current===location)return;
  previous.current=location;
  const analytics=window as typeof window&{gtag?:(...args:unknown[])=>void};
  analytics.gtag?.('event','page_view',{page_location:location,page_title:document.title,page_path:window.location.pathname+window.location.search});
 },[pathname]);
 return null;
}
