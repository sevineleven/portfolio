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
            <strong className="font-medium text-gray-800 dark:text-gray-100">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-700 dark:text-gray-300">{children}</em>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-3 space-y-1.5">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-3 space-y-1.5">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{children}</li>
          ),
          h1: ({ children }) => (
            <h1 className="text-base font-semibold text-gray-900 dark:text-white mb-3">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xs font-medium text-gray-900 dark:text-white mb-2">{children}</h3>
          ),
          code: ({ children }) => (
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-[10px] text-gray-800 dark:text-gray-200">
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
