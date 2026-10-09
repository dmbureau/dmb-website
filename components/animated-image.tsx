import {PremiumVisual} from '@/components/premium-visual';
export function AnimatedImage({name,alt,compact=false}:{name:string;alt?:string;eager?:boolean;compact?:boolean}) {
 return <PremiumVisual name={name} alt={alt} compact={compact}/>;
}
