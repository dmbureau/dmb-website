import {GrowthServicePage} from '@/components/growth-service-page';
import {pageMeta} from '@/lib/site';
import {growthPaths} from '@/lib/growth-paths';
export const metadata=pageMeta('Performance Marketing Agency | Google, Meta & LinkedIn Ads',growthPaths[0].summary,'/performance-marketing');
export default function Page(){return <GrowthServicePage slug="performance-marketing"/>}
