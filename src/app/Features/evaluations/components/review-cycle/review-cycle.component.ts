import { Component } from '@angular/core';
import { Ratings } from 'src/app/Core/Interfaces/itable';

const ELEMENT_DATA: Ratings[] = [];

@Component({
  selector: 'app-review-cycle',
  templateUrl: './review-cycle.component.html',
  styleUrls: ['./review-cycle.component.scss']
})
export class ReviewCycleComponent {
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
