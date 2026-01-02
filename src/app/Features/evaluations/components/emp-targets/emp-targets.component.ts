import { Component } from '@angular/core';
import { Ratings } from 'src/app/Core/Interfaces/itable';

const ELEMENT_DATA: Ratings[] = [];

@Component({
  selector: 'app-emp-targets',
  templateUrl: './emp-targets.component.html',
  styleUrls: ['./emp-targets.component.scss']
})
export class EmpTargetsComponent {
  dataSource: Ratings[] = ELEMENT_DATA;

  ngOnInit(): void {}

  onView(row: Ratings) {
    console.log('View', row);
  }

  onEdit(row: Ratings) {
    console.log('Edit', row);
  }

  onDelete(row: Ratings) {
    console.log('Delete', row);
  }

}
