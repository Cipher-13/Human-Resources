import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { AccessibilitiesComponent } from './Components/accessibilities/accessibilities.component';
import { ChangePassComponent } from './Components/change-pass/change-pass.component';
import { EmailComponent } from './Components/email/email.component';
import { InfoComponent } from './Components/info/info.component';
import { TradeMarkComponent } from './Components/trade-mark/trade-mark.component';
import { PolicyComponent } from './Components/policy/policy.component';


const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [


      {
        path: 'info',
        component: InfoComponent
      },


     {
        path: 'policy',
        component: PolicyComponent
      },

      {
        path: 'accessibilities',
        component: AccessibilitiesComponent
      },

      {
        path: 'trade-mark',
        component: TradeMarkComponent
      },

      {
        path: 'email',
        component: EmailComponent
      },

      {
        path: 'change-password',
        component: ChangePassComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
