import { Component } from '@angular/core';

@Component({
  selector: 'app-departure',
  templateUrl: './departure.component.html',
  styleUrls: ['./departure.component.scss']
})
export class DepartureComponent {
 startDate: Date | null = null;
  endDate: Date | null = null;

  selectedTeam1?: string;
  selectedTeam2?: string;

  teams = [
    { id: 1, name: 'تيم المطورين', leader: 'أحمد هارون' },
    { id: 2, name: 'تيم المبيعات', leader: 'مصطفى السميري' },
  ];
}
