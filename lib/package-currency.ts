// Illustrative regional prices, not live exchange rates or final service fees.
export const pricingRegions = [
 {country:'US',name:'United States / USD',currency:'USD',locale:'en-US',prices:[149,499,999]},
 {country:'GB',name:'United Kingdom / GBP',currency:'GBP',locale:'en-GB',prices:[119,399,799]},
 {country:'AE',name:'UAE & Dubai / AED',currency:'AED',locale:'en-AE',prices:[549,1849,3699]},
 {country:'KW',name:'Kuwait / KWD',currency:'KWD',locale:'en-KW',prices:[46,154,309]},
 {country:'IN',name:'India / INR',currency:'INR',locale:'en-IN',prices:[12500,42000,84000]},
 {country:'EU',name:'Euro area / EUR',currency:'EUR',locale:'en-IE',prices:[139,459,919]},
 {country:'OTHER',name:'Other countries / USD',currency:'USD',locale:'en-US',prices:[149,499,999]},
];
export function pricingCountry(country:string|null|undefined){const code=country?.toUpperCase();if(pricingRegions.some(r=>r.country===code))return code!;if(['AT','BE','HR','CY','EE','FI','FR','DE','GR','IE','IT','LV','LT','LU','MT','NL','PT','SK','SI','ES','BG'].includes(code||''))return 'EU';return 'OTHER'}
export function packagePrice(region:typeof pricingRegions[number],index:number){return new Intl.NumberFormat(region.locale,{style:'currency',currency:region.currency,minimumFractionDigits:0,maximumFractionDigits:0}).format(region.prices[index])}
