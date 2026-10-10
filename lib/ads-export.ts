import {parseCSV} from './audit-plan';
export type AdPlatform='google'|'meta'|'linkedin';
const clean=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
function numeric(value:string|undefined){if(!value?.trim()||/^(--|n\/a|not available)$/i.test(value.trim()))return null;const n=Number(value.replace(/[^0-9.\-]/g,''));return Number.isFinite(n)&&n>=0?n:null}
export function analyzeAdsExport(text:string,platform:AdPlatform){
 const rows=parseCSV(text);if(rows.length>5002)throw Error('Use an export with no more than 5,000 data rows.');
 const spendNames=platform==='google'?['cost','totalcost','spend']:platform==='meta'?['amountspent','amountspentinr','amountspentusd','spend','cost']:['totalspent','spent','spend','cost','totalcost'];
 const headerAt=rows.findIndex(row=>row.some(c=>spendNames.includes(clean(c))||/^amountspent/.test(clean(c)))&&row.some(c=>['campaign','campaignname','adsetname'].includes(clean(c))));
 if(headerAt<0)throw Error('The export needs a Campaign or Campaign name column and a Cost, Amount spent or Total spent column.');
 const headers=rows[headerAt],normalized=headers.map(clean),find=(names:string[])=>normalized.findIndex(c=>names.includes(c));
 const spend=find(spendNames)>=0?find(spendNames):normalized.findIndex(c=>/^amountspent/.test(c));
 const campaign=find(['campaign','campaignname','adsetname']);const clicks=find(['clicks','linkclicks','clicksall','clickstotal']);const impressions=find(['impressions','impression']);
 const result=find(['conversions','conversion','leads','purchases','results','totalconversions']);const currency=find(['currency','accountcurrency']);
 const currencies=new Set<string>();
 const campaigns=rows.slice(headerAt+1).filter(row=>row[campaign]?.trim()&&!/^total(?:\b|:)/i.test(row[campaign].trim())).map(row=>{if(currency>=0&&row[currency]?.trim())currencies.add(row[currency].trim().toUpperCase());return {name:row[campaign].trim(),spend:numeric(row[spend]),clicks:clicks>=0?numeric(row[clicks]):null,impressions:impressions>=0?numeric(row[impressions]):null,results:result>=0?numeric(row[result]):null}}).filter(row=>row.spend!==null);
 if(!campaigns.length)throw Error('No usable campaign rows with nonnegative spend were found.');
 if(currencies.size>1)throw Error('This export mixes currencies. Upload one account currency at a time.');
 const sum=(key:'spend'|'clicks'|'impressions'|'results')=>{const values=campaigns.map(row=>row[key]).filter((n):n is number=>n!==null);return values.length?values.reduce((a,b)=>a+b,0):null};
 const spendTotal=sum('spend')!,clickTotal=sum('clicks'),resultTotal=sum('results');
 const findings=campaigns.filter(row=>row.spend!>0&&(row.results===0||row.clicks===0)).map(row=>({name:row.name,detail:row.clicks===0?'Spend is reported with zero clicks. Review delivery, objective and reporting definitions.':'Spend is reported with zero '+(result>=0?headers[result].toLowerCase():'results')+'. Review the offer, audience, destination and measurement before changing budgets.'}));
 return {platform,rows:campaigns.length,currency:[...currencies][0]||null,spend:spendTotal,clicks:clickTotal,impressions:sum('impressions'),results:resultTotal,resultLabel:result>=0?headers[result]:'Results not supplied',cpc:clickTotal&&clickTotal>0?spendTotal/clickTotal:null,costPerResult:resultTotal&&resultTotal>0?spendTotal/resultTotal:null,findings,campaigns};
}
