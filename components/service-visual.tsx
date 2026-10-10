import catalog from '@/content/image-catalog.json';
import {AnimatedImage} from '@/components/animated-image';
export function EditorialImage({name,alt,eager=false}:{name:string;alt:string;eager?:boolean}){return <AnimatedImage name={name} alt={alt} eager={eager}/>}
export function ServiceVisual({slug,compact=false,eager=false,featureKey}:{slug:string;compact?:boolean;eager?:boolean;featureKey?:string}){const names=compact?catalog.cards:catalog.features;const name=featureKey||(names as Record<string,string>)[slug];if(!name)return null;return <figure className={'service-photograph photograph-diagram'+(compact?' photograph-compact':' photograph-feature')}><AnimatedImage name={name} eager={eager} compact={compact}/></figure>}
export function IndustryVisual({name}:{name:string;issues:string[]}){return <figure className="service-photograph photograph-feature industry-photograph"><AnimatedImage name={(catalog.industries as Record<string,string>)[name]} eager/></figure>}
