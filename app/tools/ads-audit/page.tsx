import {AuditToolPage} from '@/components/audit-tool-page';
import {auditTools} from '@/lib/audit-tools';
import {pageMeta} from '@/lib/site';
const tool=auditTools.find(t=>t.kind==='ads')!;
export const metadata=pageMeta(tool.name+' | Digital Marketing Bureau',tool.meta,'/tools/ads-audit');
export default function Page(){return <AuditToolPage kind="ads"/>}
