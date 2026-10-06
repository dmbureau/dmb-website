import type { Metadata } from 'next';
export const origin = 'https://dmbureau.cloud';
export function pageMeta(title: string, description: string, path: string): Metadata {
  const shortTitle=title.replace(/\s*[|—]\s*Digital Marketing Bureau/g,'').trim();
  const branded=shortTitle.length<=59?shortTitle+' | DMB':shortTitle;
  return { title:{absolute:branded}, description, alternates: { canonical: origin + path }, openGraph: { title: title + ' | Digital Marketing Bureau', description, url: origin + path, siteName: 'Digital Marketing Bureau', locale: 'en_US', type: 'website' }, twitter: { card: 'summary', title: title + ' | Digital Marketing Bureau', description } };
}
