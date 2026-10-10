import {bureauNavigationHtml} from '@/lib/bureau-navigation';
import shell from '@/content/theme-shell.json';
import settings from '@/content/settings.json';
import {markets} from '@/lib/markets';
const escape=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
function navigation(html:string){
 html=html.replace(/(<ul id="(?:main-nav|m-main-nav)"[^>]*>)/g,'$1'+bureauNavigationHtml());

 const company='<li class="dropdown"><a href="/about">Company</a><ul class="dropdown-menu clearfix"><li><a href="/about">About Us</a></li><li><a href="/blog">Blog</a></li><li><a href="/industries">Industries</a></li><li><a href="/markets">Markets</a></li></ul></li>';
 html=html.replace(/<li><a href="\/(?:blog|about)\/?">(?:Blog|About DMB|About Us)<\/a><\/li>/g,'');
 html=html.replace(/(<li><a href="\/contact\/?">Contact<\/a><\/li>)/g,company+'$1');

 // Country and market destinations are available from the footer, not the main menus.
 html=html.replace(/<li class="dropdown"><a href="\/markets">Countries<\/a><ul class="dropdown-menu clearfix">[\s\S]*?<\/ul><\/li>/g,'');
 // Make the three core bureau pages directly accessible in desktop and mobile menus.
 html=html.replace(/<li class="dropdown"><a href="\/industries\/?">Industries<\/a><ul class="dropdown-menu clearfix">[\s\S]*?<\/ul><\/li>/g,'');
 // Consolidated services remain discoverable through the SEO/PPC hubs and service pages.
 html=html.replace(/<li><a href="\/services\/(?:linkedin-advertising|b2b-lead-generation|conversion-optimization|landing-page-design)">[^<]*<\/a><\/li>/g,'');for(const [path,items] of [['markets',markets.map(m=>({name:m.name,url:'/markets/'+m.slug}))],['services',[{name:'SEO Bureau',url:'/seo-bureau'},{name:'PPC Bureau',url:'/ppc-bureau'},{name:'Social Media Marketing Bureau',url:'/smm-bureau'}]]] as const){const links=items.map(i=>'<li><a href="'+escape(i.url)+'">'+escape(i.name)+'</a></li>').join('');html=html.replace(new RegExp('(<a href="/'+path+'">[^<]*</a><ul[^>]*>)[\\s\\S]*?(</ul>)','g'),'$1'+links+'<li><a href="/'+path+'">Explore all</a></li>$2')}return html.replace(/<h([2-6])\b([^>]*)>/g,'<p class="theme-sidebar-title"$2>').replace(/<\/h[2-6]>/g,'</p>')}
export function Header(){return <div className="theme-shell theme-shell-header elementor-page-7" data-theme-shell="home-1-header" dangerouslySetInnerHTML={{__html:navigation(shell.header)}}/>}
export function Footer(){const marketLinks='<nav class="dmb-footer-market-directory" aria-label="Our markets"><h3>Our Markets</h3><div class="dmb-footer-market-grid">'+markets.map(m=>'<a href="/markets/'+escape(m.slug)+'">'+escape(m.name)+'</a>').join('')+'</div><a class="dmb-footer-all-markets" href="/markets">Explore all markets →</a></nav>';const footerHtml=shell.footer.replace(/<li><a href="\/privacy">License<\/a><\/li><li><a href="\/services">Style Guide<\/a><\/li><li><a href="\/contact">Changelogs<\/a><\/li>/g,'<li><a href="/privacy">Privacy Policy</a></li>').replace(/<\/footer>\s*$/i,marketLinks+'</footer>');return <div className="theme-shell theme-shell-footer elementor-page-7" data-theme-shell="home-1-footer"><div dangerouslySetInnerHTML={{__html:footerHtml}}/><div className="theme-shell-contact"><a href={'mailto:'+settings.email}>{settings.email}</a><a href={'tel:'+settings.phone}>{settings.phoneLabel}</a></div></div>}
