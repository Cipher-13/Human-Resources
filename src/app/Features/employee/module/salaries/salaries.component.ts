import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.scss'] ,
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
export class SalariesComponent {
 
  selectedMonthLabel: string = "شهر سبتمبر";
  selectedDateLabel: string = "";

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
