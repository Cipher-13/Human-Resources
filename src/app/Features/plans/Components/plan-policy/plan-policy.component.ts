import { OrderPolicy } from './../../../../Core/Interfaces/itable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-policy',
  templateUrl: './plan-policy.component.html',
  styleUrls: ['./plan-policy.component.scss']
})
export class PlanPolicyComponent implements OnInit {

  dataSource: OrderPolicy[] = [];

  ngOnInit(): void {
    // Dummy data (remove when API is connected)
    this.dataSource = [
      {
        orderName: 'ORD-1001',
        orderDate: new Date(),
        userName: 'Ahmed Ihab',
        planName: 'Pro',
        originalPrice: 500,
        couponCode: 'SAVE20',
        discount: 100,
        finalPrice: 400,
        status: 'paid'
      },
      {
        orderName: 'ORD-1002',
        orderDate: new Date(),
        userName: 'Sara Ali',
        planName: 'Starter',
        originalPrice: 200,
        couponCode: '',
        discount: 0,
        finalPrice: 200,
        status: 'pending'
      }
    ];
  }

  onView(row: OrderPolicy): void {
    console.log('View:', row);
  }

  onEdit(row: OrderPolicy): void {
    console.log('Edit:', row);
  }

  onDelete(row: OrderPolicy): void {
    this.dataSource = this.dataSource.filter(item => item !== row);
  }
}
