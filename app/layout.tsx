import {GoogleAnalytics} from '@/components/google-analytics';
import {usesUSEnglish} from '@/lib/english';
import {markets} from '@/lib/markets';
import {headers} from 'next/headers';
import {localeForPath} from '@/lib/market-locales';
import {LocalizedMarketHeader,LocalizedMarketFooter} from '@/components/localized-market-shell';
import settings from '@/content/settings.json';
import type { Metadata } from 'next';
import './globals.css';
import './initial-paint.css';
import './premium-design.css';
import './layout-refinement.css';
import './theme-site.css';
import {ThemeMotion} from '@/components/theme-motion';
import { Header, Footer } from '@/components/theme-shell';
import { Schema } from '@/components/blocks';
import {PageMotion} from '@/components/page-motion';
import { MotionLayer } from '@/components/motion-layer';
import { origin } from '@/lib/site';
export const metadata: Metadata={metadataBase:new URL(origin),title:{default:'Digital Marketing Bureau | SEO & Performance Marketing',template:'%s | Digital Marketing Bureau'},description:'India-based SEO and performance marketing agency serving businesses worldwide. Google Ads, Meta Ads, organic marketing and websites built around useful enquiries.',alternates:{canonical:origin},openGraph:{title:'Digital Marketing Bureau | SEO, Ads & Social Media',description:'India-based digital marketing agency with remote delivery across markets.',images:[{url:'/social-preview.png',width:1200,height:630,alt:'Digital Marketing Bureau'}]},twitter:{card:'summary_large_image',images:['/social-preview.png']},icons:{icon:[{url:'/favicon.ico',type:'image/x-icon',sizes:'96x96'},{url:'/favicon.png',type:'image/png',sizes:'96x96'},{url:'/favicon.svg?v=2',type:'image/svg+xml'}],apple:'/favicon.png'}};
export default async function RootLayout({children}:{children:React.ReactNode}) {const requestHeaders=await headers();const pathname=requestHeaders.get('x-dmb-pathname')||'';const localized=localeForPath(pathname);const useUS=usesUSEnglish(pathname.split('/')[2]||'');return <html lang={localized?.locale||(useUS?'en-US':'en')}><head><link rel="stylesheet" href="/marpixel-live/shell.css"/><meta name="google-site-verification" content="u32am2xDfflHYzCsTwlBLYSAfopK3-U4yGnuwr8FL14"/><link rel="preload" href="/fonts/inter-300-latin.woff" as="font" type="font/woff" crossOrigin="anonymous"/><script async src="https://www.googletagmanager.com/gtag/js?id=G-JRC54QEPEX"/><script id="dmb-ga4" dangerouslySetInnerHTML={{__html:"window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag(\'js\',new Date());gtag(\'config\',\'G-JRC54QEPEX\',{send_page_view:false});"}}/><script id="dmb-clarity" dangerouslySetInnerHTML={{__html:"(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src=\"https://www.clarity.ms/tag/\"+i+\"?ref=bwt\";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,\"clarity\",\"script\",\"yveg7o46ge\");"}}/></head><body className="dmb-theme-site"><a className="skip-link" href="#main">{localized?.ui.skip||'Skip to content'}</a><Header/>{children}<Footer/><GoogleAnalytics/><ThemeMotion/><Schema data={{'@context':'https://schema.org','@type':'WebSite','@id':origin+'/#website',url:origin,name:'Digital Marketing Bureau',alternateName:'DMB',inLanguage:'en',publisher:{'@id':origin+'/#organization'}}}/><Schema data={{'@context':'https://schema.org','@type':'Organization','@id':origin+'/#organization',name:'Digital Marketing Bureau',alternateName:'DMB',url:origin,description:'DMB stands for Digital Marketing Bureau, an India-based performance marketing agency serving businesses worldwide with SEO, paid advertising, social media and landing page optimisation.',email:settings.email,telephone:settings.phone,logo:origin+'/dmb-logo.svg',founder:{'@type':'Person',name:'Parmjeet Singh'},areaServed:markets.filter(m=>m.slug!=='dubai').map(m=>({'@type':'Country',name:m.name})),sameAs:[settings.linkedin,settings.instagram,settings.facebook,settings.x]}}/></body></html>}

