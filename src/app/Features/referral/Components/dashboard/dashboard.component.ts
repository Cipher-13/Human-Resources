import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {  // Data properties for the component
  availableBalance: number = 0.00;
  totalEarnings: number = 0;
  totalUsers: number = 0;
  totalReferrals: number = 0;
  referralLink: string = 'pro.store/register?ref=586884';

  constructor() {}

  /**
   * Copies the referral link to the clipboard
   */
  copyReferralLink(): void {
    navigator.clipboard.writeText(this.referralLink).then(() => {
      // You could add a toast notification here
      console.log('Link copied to clipboard!');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }

  /**
   * Navigates to the "View All" page for returned users
   */
  viewAllReturnedUsers(): void {
    console.log('Navigating to all returned users...');
  }
}
