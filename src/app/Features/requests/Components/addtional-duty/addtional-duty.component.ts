import { Component } from '@angular/core';

@Component({
  selector: 'app-addtional-duty',
  templateUrl: './addtional-duty.component.html',
  styleUrls: ['./addtional-duty.component.scss']
})


export class AddtionalDutyComponent {

  startDate: Date | null = null;
  endDate: Date | null = null;

  selectedTeam1?: string;
  selectedTeam2?: string;

  teams = [
    { id: 1, name: 'تيم المطورين', leader: 'أحمد هارون' },
    { id: 2, name: 'تيم المبيعات', leader: 'مصطفى السميري' },
  ];
}
