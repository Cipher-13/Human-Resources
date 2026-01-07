import { Component } from '@angular/core';
interface PayoutRecord {
  amount: number;
  status: string;
  statusClass: string;
  date: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
 // Minimum amount required for payout
  minPayoutAmount: number = 50.00;

  // Payout history data
  payouts: PayoutRecord[] = [];

  constructor() {
    // Example data (uncomment to see rows)
    /*
    this.payouts = [
      { amount: 100.00, status: 'مكتمل', statusClass: 'status-completed', date: '2023-10-01' },
      { amount: 50.00, status: 'قيد الانتظار', statusClass: 'status-pending', date: '2023-10-15' }
    ];
    */
  }

  /**
   * Handles the payout request action
   */
  requestPayout(): void {
    console.log('Payout request initiated');
    // Logic to handle payout request
    alert('تم إرسال طلب الدفع بنجاح');
  }
}
