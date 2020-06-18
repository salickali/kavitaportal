import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VpoComponent } from './vpo/vpo.component';
import { LoginComponent } from './login/login.component';
import { VcmComponent } from './vcm/vcm.component';
import { VendorgrComponent } from './vendorgr/vendorgr.component';
import { VpayComponent } from './vpay/vpay.component';
import { VinvhComponent } from './vinvh/vinvh.component';
import { VinvpComponent } from './vinvp/vinvp.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'po',
    component: VpoComponent

  },
  {
    path: 'cm',
    component:  VcmComponent

  },
  {
    path: 'gr',
    component: VendorgrComponent

  },
  {
    path: 'pay',
    component: VpayComponent

  },
  {
    path: 'invh',
    component: VinvhComponent

  },
  {
    path: 'invp',
    component: VinvpComponent
  },
  {
    path: '', //default pathMatch: 'prefix'
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
