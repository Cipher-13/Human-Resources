import { Component } from '@angular/core';
import { Ratings } from 'src/app/Core/Interfaces/itable';


const ELEMENT_DATA: Ratings[] = [];
@Component({
  selector: 'app-progress-lvls',
  templateUrl: './progress-lvls.component.html',
  styleUrls: ['./progress-lvls.component.scss']
})
export class ProgressLvlsComponent {


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
