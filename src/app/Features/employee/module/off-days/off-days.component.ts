import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-off-days',
  templateUrl: './off-days.component.html',
  styleUrls: ['./off-days.component.scss'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(6px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(-6px)' }))
      ])
    ])
  ]
})
export class OffDaysComponent {

  selectedMonthLabel: string = "شهر سبتمبر";
  selectedDateLabel: string = "";
  leaveCards = [
  { icon: `<i class="fa-solid fa-plane"></i>`, type: "اجازات سنوية", days: "15/3 يوم" },
  { icon: `<i class="fa-solid fa-face-dizzy"></i>`, type: "اجازات مرضية", days: "10/5 يوم" },
  { icon: `<i class="fa-solid fa-sack-dollar"></i>`, type: "اجازات بدون اجر", days: "15/8 يوم" },
  { icon: `<i class="fa-solid fa-bullhorn"></i>`, type: "اجازات طارئة", days: "5/2 يوم" },
  { icon: `<i class="fa-solid fa-user-tie"></i>`, type: "اجازات زواج", days: "5/2 يوم" },
  { icon: `<i class="fa-solid fa-book-bookmark"></i>`, type: "اجازات دراسية", days: "5/2 يوم" },
  { icon: `<i class="fa-solid fa-skull"></i>`, type: "عطلات وفاة", days: "15/3 يوم" },
  { icon: `<i class="fa-solid fa-bullhorn"></i>`, type: "عطلات رسمية", days: "3 يوم" }
];

leaveRows = [
  {
    type: "إجازة سنوية",
    date: "6 سبتمبر 2035",
    days: 1,
    status: "approved"
  },
  {
    type: "إجازة سنوية",
    date: "23 سبتمبر 2035",
    days: 2,
    status: "rejected"
  },
  {
    type: "إجازة سنوية",
    date: "23 سبتمبر 2035",
    days: 2,
    status: "pending"
  }
];


  months = [
    "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  ];

  monthSelected(event: any, picker: any) {
  const monthName = this.months[event.getMonth()];
  const year = event.getFullYear();

  // month+ year
  this.selectedMonthLabel = `شهر ${monthName} ${year}`;
  this.selectedDateLabel = `${monthName} - ${year}`;

  picker.close();
}
/*full date*/
dateSelected(event: any) {
  const selectedDate = event?.value;
  if (!selectedDate) return;

  const d = new Date(selectedDate);
  const day = d.getDate();
  const monthName = this.months[d.getMonth()];
  const year = d.getFullYear();

  this.selectedDateLabel = `${day} ${monthName} ${year}`;
  this.selectedMonthLabel = `شهر ${monthName} ${year}`; // يظهر السنة مع الشهر
}

}
