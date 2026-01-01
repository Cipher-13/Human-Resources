import { Component } from '@angular/core';

@Component({
  selector: 'app-resignation',
  templateUrl: './resignation.component.html',
  styleUrls: ['./resignation.component.scss']
})
export class ResignationComponent {

  selectedTeam1?: string;
  selectedTeam2?: string;

  teams = [
    { id: 1, name: 'تيم المطورين', leader: 'أحمد هارون' },
    { id: 2, name: 'تيم المبيعات', leader: 'مصطفى السميري' },
  ];
}
