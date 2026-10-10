import {Children,cloneElement,isValidElement,type ReactNode,type HTMLAttributes} from 'react';
import './animated-heading.css';
export function AnimatedHeading({children,className='',...props}:HTMLAttributes<HTMLHeadingElement>){
 let index=0;
 function letters(nodes:ReactNode):ReactNode{return Children.map(nodes,node=>{
  if(typeof node==='string'||typeof node==='number')return String(node).split(/(\s+)/).map((word,key)=>/^\s+$/.test(word)?word:<span className="dmb-h1-word" key={key}>{Array.from(word).map(letter=>{const current=index++;return <span key={current} className={'dmb-h1-letter dmb-h1-letter-'+Math.min(current,249)}>{letter}</span>})}</span>);
  if(isValidElement<{children?:ReactNode}>(node)&&typeof node.type==='string')return cloneElement(node,{},letters(node.props.children));
  return node;
 })}
 return <h1 {...props} className={'dmb-animated-h1 '+className}>{letters(children)}</h1>
}
