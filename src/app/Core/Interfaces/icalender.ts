export interface CalendarEvent {
  title: string;
  type: 'meeting' | 'document' | 'deadline' | 'weekend' | 'hr-deadline' | 'medical-deadline' | 'taif-deadline';
}
export 
interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
  isSelected?: boolean;
  events?: CalendarEvent[];
}
