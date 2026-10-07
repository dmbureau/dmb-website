import media from '@/content/media.json';
// Local responsive WebP images are the default; approved CMS overrides remain supported.
export function photoUrl(name:string){return media.images.find(i=>i.name===name)?.image||'/images/'+name.replace(/-600$/,'')+'-960.webp'}
