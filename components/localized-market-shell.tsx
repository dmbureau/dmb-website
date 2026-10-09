import settings from '@/content/settings.json';
import Link from '@/components/navigation-link';
import type {MarketTranslation} from '@/lib/market-locales';
export function LocalizedMarketHeader({page}:{page:MarketTranslation}){return <header className="header localized-market-header"><Link href="/" aria-label="DMB — English"><img src="/dmb-logo.svg" width="118" height="33" alt="Digital Marketing Bureau"/></Link><nav aria-label={page.ui.markets}><Link href="/markets" lang="en">{page.ui.markets} · English</Link><a className="button" href="#market-contact">{page.ui.quote}</a></nav></header>}
export function LocalizedMarketFooter({page}:{page:MarketTranslation}){return <footer className="section localized-market-footer"><p>Digital Marketing Bureau · DMB</p><a href={'mailto:'+settings.email}>{settings.email}</a><p>{page.ui.english}</p><Link href="/privacy" lang="en">{page.ui.privacy}</Link></footer>}
