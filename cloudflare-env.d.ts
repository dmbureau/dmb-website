declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    PAGESPEED_API_KEY?: string;
    CRUX_API_KEY?: string;
    BUCKET?: R2Bucket;
  }
}
