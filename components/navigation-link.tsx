import type { AnchorHTMLAttributes } from 'react';

// Use standard document navigation so every marketing page remains reachable
// without depending on client router or RSC fetches through the private gateway.
export default function NavigationLink({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a href={href} {...props} />;
}
