import { VisItem } from '@/interfaces/vis.interface';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

// Custom React component for item details
export function EventDetailDialog({
  item,
  open,
  onOpenChange,
}: {
  item: VisItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {item.title}
          </DialogTitle>
          <DialogDescription>
            {item.start.toLocaleDateString()} - {item.end?.toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">{item.content}</div>
      </DialogContent>
    </Dialog>
  );
}
