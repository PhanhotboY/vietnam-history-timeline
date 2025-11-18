'use client';

import { useEffect, useRef, useState } from 'react';
import { DataSet } from 'vis-data';
import { Timeline, TimelineOptions } from 'vis-timeline';
import 'vis-timeline/styles/vis-timeline-graph2d.css';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import './index.css';
import { VisItem } from '@/interfaces/vis.interface';
import { EventDetailDialog } from './EventDetailDialog';
import { HistoricalEventDetailResponseDto } from '@nsv-common/dto';

export function HistoricalEventTimeline({
  events,
}: {
  events: HistoricalEventDetailResponseDto[];
}) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timeline, setTimeline] = useState<Timeline | null>(null);
  const [selectedItem, setSelectedItem] = useState<VisItem | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (!timelineRef.current) return;

    // Helper function to create date from parts
    const createDate = (year: number, month?: number, day?: number) => {
      // Handle BCE dates (negative years)
      const isBCE = year < 0;
      const absYear = Math.abs(year);

      if (isBCE) {
        // For BCE, create date and adjust
        const date = new Date(0, (month || 1) - 1, day || 1);
        date.setFullYear(-absYear);
        return date;
      }

      return new Date(absYear, (month || 1) - 1, day || 1);
    };

    const items = new DataSet<VisItem>(
      events.map((event) => {
        const start = createDate(
          event.fromYear,
          event.fromMonth!,
          event.fromDay!,
        );
        const end = event.toYear
          ? createDate(event.toYear, event.toMonth!, event.toDay!)
          : undefined;

        return {
          id: event.id,
          content: event.content,
          start,
          end,
          title: event.name, // Tooltip preview
          type: end ? ('range' as const) : ('point' as const), // Range for events with duration
          className: event.categories
            .map((c: any) => c.category.slug)
            .join(' '),
          group: event.categories[0]?.category.name, // Optional grouping
        };
      }),
    );

    const options: TimelineOptions = {
      stack: true,
      editable: false,
      selectable: true,
      showCurrentTime: false,
      start: new Date(-500, 0, 1),
      end: new Date(1000, 11, 31),
      format: {
        minorLabels: (date: any, scale, step) => {
          switch (scale) {
            case 'year':
              return date.year().toString();
            case 'month':
              return date.format('MMM');
            case 'week':
              return date.format('w');
            case 'day':
              return date.format('D');
            case 'weekday':
              return date.format('ddd D');
            case 'hour':
              return date.format('HH:mm');
            case 'minute':
              return date.format('HH:mm');
            case 'second':
              return date.format('s');
            case 'millisecond':
              return date.format('SSS');
            default:
              return '';
          }
        },
        majorLabels: (date: any, scale, step) => {
          const year = date.year().toString();
          switch (scale) {
            case 'year':
              return '';
            case 'month':
              return year;
            case 'week':
              return `${date.format('MMMM')} ${year}`;
            case 'day':
              return `${date.format('MMMM')} ${year}`;
            case 'weekday':
              return `${date.format('MMMM')} ${year}`;
            case 'hour':
              return date.format('ddd D MMMM');
            case 'minute':
              return date.format('ddd D MMMM');
            case 'second':
              return date.format('D MMMM HH:mm');
            case 'millisecond':
              return date.format('HH:mm:ss');
            default:
              return '';
          }
        },
      },
      template: (item) => {
        return `
          <div class="flex items-center justify-between gap-2 px-2 py-1">
          <h2 class="text-sm font-semibold truncate">${item.title}</h2>
            <span class="text-sm font-medium truncate">${item.content}</span>
          </div>
        `;
      },
    };

    const newTimeline = new Timeline(timelineRef.current, items, options);

    // Handle click to open React dialog
    newTimeline.on('select', (properties) => {
      if (properties.items.length > 0) {
        const itemId = properties.items[0];
        const item = items.get(itemId) as any as VisItem;
        setSelectedItem(item);
        setDialogOpen(true);
      }
    });

    setTimeline(newTimeline);

    return () => {
      newTimeline.destroy();
    };
  }, []);

  const handleZoomIn = () => {
    if (timeline) {
      const currentRange = timeline.getWindow();
      const start = new Date(currentRange.start.valueOf());
      const end = new Date(currentRange.end.valueOf());
      const interval = end.getTime() - start.getTime();
      const newInterval = interval * 0.7;
      const center = new Date((start.getTime() + end.getTime()) / 2);
      const newStart = new Date(center.getTime() - newInterval / 2);
      const newEnd = new Date(center.getTime() + newInterval / 2);
      timeline.setWindow(newStart, newEnd);
    }
  };

  const handleZoomOut = () => {
    if (timeline) {
      const currentRange = timeline.getWindow();
      const start = new Date(currentRange.start.valueOf());
      const end = new Date(currentRange.end.valueOf());
      const interval = end.getTime() - start.getTime();
      const newInterval = interval * 1.3;
      const center = new Date((start.getTime() + end.getTime()) / 2);
      const newStart = new Date(center.getTime() - newInterval / 2);
      const newEnd = new Date(center.getTime() + newInterval / 2);
      timeline.setWindow(newStart, newEnd);
    }
  };

  const handleToday = () => {
    if (timeline) {
      const currentDate = new Date(2025, 2, 12);
      const start = new Date(currentDate);
      start.setDate(start.getDate() - 15);
      const end = new Date(currentDate);
      end.setDate(end.getDate() + 15);
      timeline.setWindow(start, end);
    }
  };

  return (
    <Card className="py-0">
      <CardContent className="p-0">
        <div className="p-4 border-b flex gap-2">
          <Button variant="outline" size="icon" onClick={handleZoomIn}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleZoomOut}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              if (timeline) {
                const window = timeline.getWindow();
                const interval = window.end.getTime() - window.start.getTime();
                const distance = interval * 0.2;
                const newStart = new Date(window.start.getTime() - distance);
                const newEnd = new Date(window.end.getTime() - distance);
                timeline.setWindow(newStart, newEnd);
              }
            }}
            title="Move Left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" onClick={handleToday} className="text-xs">
            Today
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              if (timeline) {
                const window = timeline.getWindow();
                const interval = window.end.getTime() - window.start.getTime();
                const distance = interval * 0.2;
                const newStart = new Date(window.start.getTime() + distance);
                const newEnd = new Date(window.end.getTime() + distance);
                timeline.setWindow(newStart, newEnd);
              }
            }}
            title="Move Right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6">
          <div ref={timelineRef} className="timeline-container" />
        </div>

        {/* React Dialog with shadcn components */}
        <EventDetailDialog
          item={selectedItem}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      </CardContent>
    </Card>
  );
}
