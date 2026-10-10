'use client';
import {useEffect} from 'react';
export function ThemeMotion(){useEffect(()=>{if(document.querySelector('script[data-dmb-theme-motion]'))return;const script=document.createElement('script');script.src='/marpixel-live/motion/theme-motion.js';script.defer=true;script.dataset.dmbThemeMotion='true';document.body.appendChild(script)},[]);return null}
