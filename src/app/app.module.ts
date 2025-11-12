import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Shared/Components/nav-bar/nav-bar.component';
import { SideBarComponent } from './Shared/Components/side-bar/side-bar.component';
import { SharableModule } from './Shared/sharable/sharable.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    SharableModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
