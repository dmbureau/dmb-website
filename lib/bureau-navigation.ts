import {services} from '@/lib/content';
import seoScopes from '@/content/seo-scopes.json';

type NavLink={label:string;href:string};
const seo:NavLink[]=[
 ...seoScopes.scopes.map(s=>({label:s.name,href:'/seo-bureau#'+s.slug})),
 {label:'Off-page SEO & Outreach',href:'/seo-bureau#off-page-seo'},
 {label:'All SEO Services',href:'/seo-bureau'}
];
const ppcSlugs=['google-ads-management','paid-social-advertising','linkedin-advertising','paid-media-strategy','landing-page-design','conversion-optimization'];
const smmSlugs=['social-media-content-management','online-reputation-management'];
const links=(slugs:string[],hub:string):NavLink[]=>[
 ...slugs.map(slug=>services.find(s=>s.slug===slug)).filter((s):s is typeof services[number]=>Boolean(s)).map(s=>({label:s.name.replace(/ Services$/,''),href:'/services/'+s.slug})),
 {label:'All '+hub+' Services',href:hub==='PPC'?'/ppc-bureau':'/smm-bureau'}
];
const groups=[
 {name:'SEO Bureau',href:'/seo-bureau',items:seo},
 {name:'PPC Bureau',href:'/ppc-bureau',items:links(ppcSlugs,'PPC')},
 {name:'SMM Bureau',href:'/smm-bureau',items:links(smmSlugs,'SMM')}
];
const escape=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
export function bureauNavigationHtml(){
 return groups.map(g=>'<li class="dropdown"><a href="'+g.href+'">'+g.name+'</a><ul class="dropdown-menu clearfix">'+g.items.map(item=>'<li><a href="'+escape(item.href)+'">'+escape(item.label)+'</a></li>').join('')+'</ul></li>').join('');
}
