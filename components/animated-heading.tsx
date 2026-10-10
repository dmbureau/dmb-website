import type {HTMLAttributes} from 'react';
import './animated-heading.css';
export function AnimatedHeading({children,className='',...props}:HTMLAttributes<HTMLHeadingElement>){return <h1 {...props} className={'dmb-animated-h1 tx-split-text split-in-right '+className}>{children}</h1>}
