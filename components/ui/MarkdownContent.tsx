'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export default function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  return (
    <div className={`prose prose-gray dark:prose-invert max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => <p className="mb-3 last:mb-0 text-xs leading-relaxed">{children}</p>,
          strong: ({ children }) => (
            <strong className="markdown-strong font-medium">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="markdown-em italic">{children}</em>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-3 space-y-1.5">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-3 space-y-1.5">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="markdown-li text-xs leading-relaxed">{children}</li>
          ),
          h1: ({ children }) => (
            <h1 className="markdown-h1 text-base font-semibold mb-3">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="markdown-h2 text-sm font-semibold mb-2">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="markdown-h3 text-xs font-medium mb-2">{children}</h3>
          ),
          code: ({ children }) => (
            <code className="markdown-code bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-[10px]">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg overflow-x-auto mb-3 text-xs">
              {children}
            </pre>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
