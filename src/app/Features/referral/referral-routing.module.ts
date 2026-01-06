import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferralComponent } from './referral.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  {
    path: '', component: ReferralComponent, children: [
      {
        path: 'dash',
        component: DashboardComponent,
        data: { title: 'لوحة تحكم الاحالات' }
      },
      {
        path: 'pay',
        component: PaymentComponent,
        data: { title: 'طلبات الدفع   ' }
      },
      {
        path: 'users',
        component: UsersComponent,
        data: { title: ' المستخدمون المرجعون  ' }
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralRoutingModule { }
