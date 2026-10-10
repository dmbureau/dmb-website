import {ThemeBlogDirectory} from '@/components/theme-blog-directory';
import {ThemeHero} from '@/components/theme-sections';
import {AnimatedHeading} from '@/components/animated-heading';
import {ServiceVisual} from '@/components/service-visual';
import {photoUrl} from '@/lib/photo-assets';
import Link from '@/components/navigation-link';
import {ArrowUpRight,ArrowRight} from 'lucide-react';
import {articles} from '@/lib/articles';
import {Breadcrumb,CTA} from '@/components/blocks';
import {pageMeta} from '@/lib/site';
export const metadata=pageMeta('Digital Marketing Blog | Practical Advice for Your Business','Explore practical DMB articles about online ads, website enquiries, useful leads and international marketing. Clear answers to common business problems.','/blog');
function photo(slug:string){return slug.includes('clicks')?'reach-right-customers':slug.includes('traffic')?'turn-visits-into-enquiries':slug.includes('qualified')?'understand-marketing-results':'find-your-business'}
export default function Blog(){return <main id="main" className="theme-interior-page marpixel-blog-page"><ThemeHero title={<>Digital Marketing Blog:<br/><span>SEO, Ads & Lead Generation</span></>} trail={[{label:'Blog'}]} kicker="The DMB Blog" description="Practical answers about SEO, ads and business enquiries."/><section className="section"><ThemeBlogDirectory/></section><CTA title="Need help with a problem you have read about?"/></main>}
