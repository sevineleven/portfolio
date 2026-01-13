import { ReactNode } from 'react';

interface TimelineItemProps {
  title: string;
  subtitle?: string;
  period: string;
  description?: ReactNode;
  icon?: ReactNode;
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  subtitle,
  period,
  description,
  icon,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-4">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-gray-300 bg-white/50 backdrop-blur-sm dark:border-slate-600 dark:bg-slate-700/80">
          {icon || (
            <div className="h-2.5 w-2.5 rounded-sm bg-gray-400 dark:bg-indigo-400" />
          )}
        </div>
        {!isLast && (
          <div className="mt-2 h-full w-0.5 bg-gray-200 dark:bg-slate-600" />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-8'}`}>
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-gray-900 dark:!text-white">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs md:text-sm text-gray-600 dark:!text-white">{subtitle}</p>
          )}
          <p className="text-xs text-gray-500 dark:!text-white">{period}</p>
          {description && (
            <div className="mt-2 text-sm text-gray-700 dark:!text-white">
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

