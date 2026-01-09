import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceComponent } from './performance.component';
import { SharableModule } from 'src/app/Shared/sharable/sharable.module';
import { ResignationComponent } from './Components/resignation/resignation.component';
import { WarningsComponent } from './Components/warnings/warnings.component';
import { QuitingComponent } from './Components/quiting/quiting.component';
import { CompliantsComponent } from './Components/compliants/compliants.component';
import { TripsComponent } from './Components/trips/trips.component';
import { VacationsComponent } from './Components/vacations/vacations.component';
import { EmployeeTransactionsComponent } from './Components/employee-transactions/employee-transactions.component';


@NgModule({
  declarations: [
    PerformanceComponent,
    ResignationComponent,
    WarningsComponent,
    QuitingComponent,
    CompliantsComponent,
    TripsComponent,
    VacationsComponent,
    EmployeeTransactionsComponent
  ],
  imports: [
    CommonModule,
    SharableModule,
    PerformanceRoutingModule
  ]
})
export class PerformanceModule { }
