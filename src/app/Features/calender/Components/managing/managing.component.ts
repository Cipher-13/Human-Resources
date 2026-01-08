import { CalendarDay } from 'src/app/Core/Interfaces/icalender';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managing',
  templateUrl: './managing.component.html',
  styleUrls: ['./managing.component.scss']
})
export class ManagingComponent  implements OnInit {

  currentMonth: string = 'January';
  currentYear: number = 2026;

  daysOfWeek: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  calendarDays: CalendarDay[] = [];

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    this.calendarDays = [
      { date: 29, isCurrentMonth: false, events: [{ title: 'Meeting', type: 'meeting' }] },
      { date: 30, isCurrentMonth: false },
      { date: 31, isCurrentMonth: false },

      { date: 1, isCurrentMonth: true, events: [{ title: 'Meeting', type: 'meeting' }] },
      { date: 2, isCurrentMonth: true, events: [{ title: 'Week End', type: 'weekend' }] },
      { date: 3, isCurrentMonth: true, events: [
          { title: 'Meeting', type: 'meeting' },
          { title: 'Documents', type: 'document' }
        ]
      },
      { date: 4, isCurrentMonth: true },

      { date: 5, isCurrentMonth: true, isSelected: true, events: [
          { title: 'Taif Deadline', type: 'taif-deadline' },
          { title: 'Documents', type: 'document' }
        ]
      },

      { date: 6, isCurrentMonth: true },
      { date: 7, isCurrentMonth: true, events: [{ title: 'Meeting', type: 'meeting' }] },
      { date: 8, isCurrentMonth: true },
      { date: 9, isCurrentMonth: true, events: [{ title: 'Week End', type: 'weekend' }] },

      { date: 10, isCurrentMonth: true },
      { date: 11, isCurrentMonth: true, events: [{ title: 'Meeting', type: 'meeting' }] },
      { date: 12, isCurrentMonth: true },
      { date: 13, isCurrentMonth: true, events: [{ title: 'Meeting', type: 'meeting' }] },

      { date: 14, isCurrentMonth: true },
      { date: 15, isCurrentMonth: true },

      { date: 16, isCurrentMonth: true, events: [{ title: 'Week End', type: 'weekend' }] },
      { date: 17, isCurrentMonth: true, events: [{ title: 'Meeting', type: 'meeting' }] },

      { date: 18, isCurrentMonth: true },

      { date: 19, isCurrentMonth: true, events: [
          { title: 'Meeting', type: 'meeting' },
          { title: 'Documents', type: 'document' },
          { title: 'Medical Deadline', type: 'medical-deadline' }
        ]
      },

      { date: 20, isCurrentMonth: true },
      { date: 21, isCurrentMonth: true },
      { date: 22, isCurrentMonth: true },

      { date: 23, isCurrentMonth: true, events: [{ title: 'Week End', type: 'weekend' }] },
      { date: 24, isCurrentMonth: true },

      { date: 25, isCurrentMonth: true, events: [
          { title: 'Meeting', type: 'meeting' },
          { title: 'Documents', type: 'document' }
        ]
      },

      { date: 26, isCurrentMonth: true },

      { date: 27, isCurrentMonth: true, events: [
          { title: 'Meeting', type: 'meeting' },
          { title: 'Documents', type: 'document' },
          { title: 'HR Deadline', type: 'hr-deadline' }
        ]
      },

      { date: 28, isCurrentMonth: true },
      { date: 29, isCurrentMonth: true },

      { date: 30, isCurrentMonth: true, events: [{ title: 'Week End', type: 'weekend' }] },
      { date: 31, isCurrentMonth: true, events: [{ title: 'Taif Deadline', type: 'taif-deadline' }] },

      { date: 32, isCurrentMonth: false } // mock
    ];
  }
}
