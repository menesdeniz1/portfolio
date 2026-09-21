import React, { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import { highlight } from 'sugar-high';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="font-bold pt-4 mb-2 text-gradient text-4xl md:text-5xl tracking-tight" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-cyan-400 font-semibold mt-12 mb-4 text-2xl md:text-3xl text-glow-cyan"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="text-purple-400 font-semibold mt-8 mb-3 text-xl md:text-2xl"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => <h4 className="font-medium text-lg text-gray-200" {...props} />,
  p: (props: ParagraphProps) => (
    <p className="text-gray-300 leading-relaxed mb-4 text-[15px] md:text-[16px]" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol
      className="text-gray-300 list-decimal pl-5 space-y-3 mb-6"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="text-gray-300 list-none space-y-3 mb-6"
      {...props}
    />
  ),
  li: (props: ListItemProps) => (
    <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-cyan-400 before:font-bold" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className="font-medium text-cyan-200 not-italic" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-semibold text-gray-100" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      'text-purple-400 hover:text-cyan-400 hover:text-glow-cyan transition-all duration-300 relative inline-block group';
    
    // Add underline animation via before/after if we want, but simple hover is good too.
    const enhancedChildren = (
      <>
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(0,255,255,0.8)]"></span>
      </>
    );

    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={className} {...props}>
          {enhancedChildren}
        </Link>
      );
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} className={className} {...props}>
          {enhancedChildren}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {enhancedChildren}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <div className="overflow-x-auto mb-6 glass-card p-2">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            {data.headers.map((header, index) => (
              <th key={index} className="p-3 border-b border-gray-700 text-cyan-400 font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index} className="border-b border-gray-800/50 hover:bg-white/5 transition-colors">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="p-3 text-gray-300">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="border-l-4 border-purple-500 pl-4 py-1 my-6 text-gray-300 bg-purple-500/10 rounded-r-lg"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
