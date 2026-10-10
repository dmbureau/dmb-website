import type {expertReport} from '@/lib/audit-expert';
import type {BusinessLookup,BusinessSignals} from '@/lib/audit-business';
export type ExpertResult=ReturnType<typeof expertReport>&{checkedAt:string};
export type AdsEvidence={listing?:BusinessLookup["listing"];business?:BusinessSignals;checkedAt?:string;country:string;search:string;records:{source:string;status:string;advertiser:string;evidenceUrl:string;from:string;to:string;detail?:string;count?:number|null}[]};
