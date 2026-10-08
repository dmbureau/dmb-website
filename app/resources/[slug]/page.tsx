import {notFound,permanentRedirect} from 'next/navigation';
import {articles} from '@/lib/articles';
export default async function LegacyArticle({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!articles.some(a=>a.slug===slug))notFound();permanentRedirect('/blog/'+slug);}
