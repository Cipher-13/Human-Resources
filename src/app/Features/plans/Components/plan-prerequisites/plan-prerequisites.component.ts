import { Component, OnInit } from '@angular/core';
import { Requirements } from 'src/app/Core/Interfaces/itable';

@Component({
  selector: 'app-plan-prerequisites',
  templateUrl: './plan-prerequisites.component.html',
  styleUrls: ['./plan-prerequisites.component.scss']
})
export class PlanPrerequisitesComponent implements OnInit {

  dataSource: Requirements[] = [];

  ngOnInit(): void {
    this.dataSource = [
      {
        name: 'Ahmed Ihab',
        email: 'ahmed@test.com',
        planName: 'Pro',
        planDuration: 'سنوي',
        status: 'approved',
        requestedAt: new Date()
      },
      {
        name: 'Sara Ali',
        email: 'sara@test.com',
        planName: 'Starter',
        planDuration: 'شهري',
        status: 'pending',
        requestedAt: new Date()
      }
    ];
  }

  onView(row: Requirements): void {
    console.log('View:', row);
  }

  onEdit(row: Requirements): void {
    console.log('Edit:', row);
  }

  onDelete(row: Requirements): void {
    this.dataSource = this.dataSource.filter(item => item !== row);
  }
}
