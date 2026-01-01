import { Component } from '@angular/core';

@Component({
  selector: 'app-off-day',
  templateUrl: './off-day.component.html',
  styleUrls: ['./off-day.component.scss']
})
export class OffDayComponent {
  startDate: Date | null = null;
  endDate: Date | null = null;

  selectedTeam1?: string;
  selectedTeam2?: string;

  teams = [
    { id: 1, name: 'تيم المطورين', leader: 'أحمد هارون' },
    { id: 2, name: 'تيم المبيعات', leader: 'مصطفى السميري' },
  ];
}
