import {AuditToolPage} from '@/components/audit-tool-page';
import {auditTools} from '@/lib/audit-tools';
import {pageMeta} from '@/lib/site';
const tool=auditTools.find(t=>t.kind==='seo')!;
export const metadata=pageMeta(tool.name+' | Digital Marketing Bureau',tool.meta,'/tools/seo-audit');
export default function Page(){return <AuditToolPage kind="seo"/>}
