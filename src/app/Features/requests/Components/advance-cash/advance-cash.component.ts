import { Component } from '@angular/core';

@Component({
  selector: 'app-advance-cash',
  templateUrl: './advance-cash.component.html',
  styleUrls: ['./advance-cash.component.scss']
})
export class AdvanceCashComponent {

  selectedTeam1?: string;
  selectedTeam2?: string
  teams = [
    { id: 1, name: 'تيم المطورين', leader: 'أحمد هارون' },
    { id: 2, name: 'تيم المبيعات', leader: 'مصطفى السميري' },
  ];
}
