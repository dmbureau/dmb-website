import media from '@/content/media.json';
import catalog from '@/content/image-catalog.json';
type Asset={local?:string;photoId?:string;alt:string};
export function photoAsset(name:string){return (catalog.assets as Record<string,Asset>)[name]}
export function photoUrl(name:string,width=960){const asset=photoAsset(name);const override=media.images.find(i=>i.name===name||i.name===asset?.local)?.image;if(override)return override;if(asset?.photoId)return `https://images.unsplash.com/photo-${asset.photoId}?fm=webp&w=${width}&h=${Math.round(width*2/3)}&fit=crop&q=70`;return '/images/'+(asset?.local||name.replace(/-600$/,''))+'-'+width+'.webp'}
export function photoSources(name:string){const asset=photoAsset(name);if(media.images.find(i=>i.name===name||i.name===asset?.local)?.image)return undefined;return photoUrl(name,480)+' 480w, '+photoUrl(name,960)+' 960w'}
