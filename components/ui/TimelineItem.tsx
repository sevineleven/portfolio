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
        <div className="timeline-marker flex h-8 w-8 items-center justify-center rounded-lg border-2 backdrop-blur-sm">
          {icon || (
            <div className="timeline-marker-dot h-2.5 w-2.5 rounded-sm" />
          )}
        </div>
        {!isLast && (
          <div className="timeline-line mt-2 h-full w-0.5" />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-8'}`}>
        <div className="flex flex-col gap-1">
          <h3 className="timeline-title text-base font-semibold">
            {title}
          </h3>
          {subtitle && (
            <p className="timeline-subtitle text-xs md:text-sm">{subtitle}</p>
          )}
          <p className="timeline-period text-xs">{period}</p>
          {description && (
            <div className="timeline-description mt-2 text-sm">
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

