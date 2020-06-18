import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorgrComponent } from './vendorgr/vendorgr.component';
import { VcmComponent } from './vcm/vcm.component';
import { VpoComponent } from './vpo/vpo.component';
import { VqotComponent } from './vqot/vqot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VpayComponent } from './vpay/vpay.component';
import { VinvhComponent } from './vinvh/vinvh.component';
import { VinvpComponent } from './vinvp/vinvp.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    VendorgrComponent,
    VcmComponent,
    VpoComponent,
    VqotComponent,
    VpayComponent,
    VinvhComponent,
    VinvpComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
