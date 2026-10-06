import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/site-shell';
import { Schema } from '@/components/blocks';
import { MotionLayer } from '@/components/motion-layer';
import { origin } from '@/lib/site';
export const metadata: Metadata={metadataBase:new URL(origin),title:{default:'Digital Marketing Bureau | SEO & Performance Marketing',template:'%s | Digital Marketing Bureau'},description:'India-based SEO and performance marketing agency serving businesses worldwide. Google Ads, Meta Ads, organic marketing and websites built around useful enquiries.',alternates:{canonical:origin},icons:{icon:'/favicon.svg?v=2'}};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><head><link rel="preload" href="/fonts/manrope-latin.woff" as="font" type="font/woff" crossOrigin="anonymous"/></head><body><a className="skip-link" href="#main">Skip to content</a><Header/>{children}<Footer/><MotionLayer/><Schema data={{'@context':'https://schema.org','@type':'Organization','@id':origin+'/#organization',name:'Digital Marketing Bureau',alternateName:'DMB',url:origin,description:'India-based performance marketing agency working with businesses across markets.',sameAs:['https://www.linkedin.com/company/digitalmarketingbureau-global/']}}/></body></html>}
