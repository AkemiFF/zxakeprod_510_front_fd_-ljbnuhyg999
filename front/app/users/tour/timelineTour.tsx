import React from 'react';

interface TimelineItem {
  ts: string;
  title: string;
  description: string;
}

interface CustomTimelineProps {
  items: TimelineItem[];
}

const CustomTimeline: React.FC<CustomTimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <div key={index} className="flex items-start mb-8">
          <div className="flex flex-col items-center mr-4">
            <div className="rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center">
              {index + 1}
            </div>
            {index < items.length - 1 && (
              <div className="h-32 border-l-4 border-dotted border-green-500"></div>
            )}
          </div>
          <div>
            <div className="text-sm font-semibold text-muted-foreground">{item.ts}</div>
            <div className="mt-2">
              <div className="text-lg font-bold">{item.title}</div>
              <div className="text-base">{item.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomTimeline;
