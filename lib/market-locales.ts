import translations from '@/content/market-translations.json';
export const marketTranslations = translations;
export type MarketTranslation = (typeof translations)[number];
export function translatedMarket(slug:string,language:string){return translations.find(page=>page.slug===slug&&page.language===language)}
export function localeForPath(path:string){const match=path.match(/^\/markets\/([^/]+)\/([^/]+)$/);return match?translatedMarket(match[1],match[2]):undefined}
