import Link from '@/components/navigation-link';
import {marketTranslations} from '@/lib/market-locales';
export function MarketLanguageLinks({slug,label='Choose a language',current='en'}:{slug:string,label?:string,current?:string}){
 const versions=marketTranslations.filter(page=>page.slug===slug);
 if(!versions.length)return null;
 return <nav className="market-language-links" aria-label={label}><span>{label}:</span><Link href={'/markets/'+slug} hrefLang="en" lang="en" aria-current={current==='en'?'page':undefined}>English</Link>{versions.map(page=><Link key={page.locale} href={'/markets/'+slug+'/'+page.language} hrefLang={page.locale} lang={page.language} aria-current={current===page.language?'page':undefined}>{page.ui.label}</Link>)}</nav>;
}
