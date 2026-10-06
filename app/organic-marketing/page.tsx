import {GrowthServicePage} from '@/components/growth-service-page';
import {pageMeta} from '@/lib/site';
import {growthPaths} from '@/lib/growth-paths';
export const metadata=pageMeta('Organic Marketing Agency | SEO & Lead Generation Services',growthPaths[1].summary,'/organic-marketing');
export default function Page(){return <GrowthServicePage slug="organic-marketing"/>}
