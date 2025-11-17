import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Shared/Components/nav-bar/nav-bar.component';
import { SideBarComponent } from './Shared/Components/side-bar/side-bar.component';
import { SharableModule } from './Shared/sharable/sharable.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SaudiInfoComponent } from './Components/saudi-info/saudi-info.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    DashboardComponent,
    SaudiInfoComponent
  ],
  imports: [
    BrowserModule,
    SharableModule,
    AppRoutingModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
