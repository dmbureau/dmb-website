'use client';
import {useEffect} from 'react';
export function ThemeMotion(){useEffect(()=>{if(document.querySelector('script[data-dmb-theme-motion]'))return;const script=document.createElement('script');script.src='/marpixel-live/home.js';script.defer=true;script.dataset.dmbThemeMotion='true';script.onload=()=>{const motion=document.createElement('script');motion.src='/marpixel-live/motion/theme-motion.js';motion.defer=true;document.body.appendChild(motion)};document.body.appendChild(script)},[]);return null}
