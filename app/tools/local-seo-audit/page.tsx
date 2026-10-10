import {AuditToolPage} from '@/components/audit-tool-page';
import {auditTools} from '@/lib/audit-tools';
import {pageMeta} from '@/lib/site';
const tool=auditTools.find(t=>t.kind==='local')!;
export const metadata=pageMeta(tool.name,tool.meta,'/tools/local-seo-audit');
export default function Page(){return <AuditToolPage kind="local"/>}
