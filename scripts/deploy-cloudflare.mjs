import {readFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
const config=JSON.parse(readFileSync('wrangler.jsonc','utf8'));
if(config.d1_databases[0].database_id==='00000000-0000-4000-8000-000000000000')throw Error('Create dmb-leads in Cloudflare D1 and replace database_id in wrangler.jsonc before deploying.');
const result=spawnSync(process.execPath,['node_modules/wrangler/bin/wrangler.js','deploy','--config','dist/server/wrangler.json'],{stdio:'inherit'});
if(result.error)throw result.error;process.exit(result.status??1);
