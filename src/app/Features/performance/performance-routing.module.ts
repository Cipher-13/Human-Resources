import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceComponent } from './performance.component';
import { QuitingComponent } from './Components/quiting/quiting.component';
import { WarningsComponent } from './Components/warnings/warnings.component';
import { CompliantsComponent } from './Components/compliants/compliants.component';
import { TripsComponent } from './Components/trips/trips.component';
import { VacationsComponent } from './Components/vacations/vacations.component';
import { EmployeeTransactionsComponent } from './Components/employee-transactions/employee-transactions.component';
import { ResignationComponent } from './Components/resignation/resignation.component';

const routes: Routes = [{
  path: '', component: PerformanceComponent, children: [
    {
      path: 'resign',
      component: ResignationComponent,
      data: { title: 'الاستقالة' }
    },
    {
      path: 'quit',
      component: QuitingComponent,
      data: { title: 'الانهاء  ' }
    },
    {
      path: 'warn',
      component: WarningsComponent,
      data: { title: 'التحذيرات  ' }
    },
    {
      path: 'comp',
      component: CompliantsComponent,
      data: { title: ' الشكاوي    ' }
    },
    {
      path: 'trip',
      component: TripsComponent,
      data: { title: '  الرحلات' }
    },
    {
      path: 'trans',
      component: EmployeeTransactionsComponent,
      data: { title: 'تحويلات الموظفين     ' }
    },
    {
      path: 'off',
      component: VacationsComponent,
      data: { title: ' العطلات    ' }
    },
  ]
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRoutingModule { }
