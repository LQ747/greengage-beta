import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import {MatPaginatorModule} from '@angular/material';


import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FarmComponent } from './farm/farm.component';
import { FarmDetailsComponent } from './farm-details/farm-details.component';
import { CompaniesComponent } from './companies/companies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { DevicesComponent } from './devices/devices.component';
import { SettingsComponent } from './settings/settings.component';
import { EventsComponent } from './events/events.component';
import { MatTableComponent } from './mat-Table/mat-Table.component';
import { UsersTableComponent} from './users-table/users-table.component';

import { FarmService } from './services/farm.service';
import { ProcessHttpmgService } from './services/process-httpmg.service';

import 'hammerjs';

import {baseURL} from './shared/baseUrl';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UserTableServiceService } from './services/user-table-service.service';

import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';
import { DeviceService } from './services/device.service';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DeviceDetailsForRealComponent } from './device-details-for-real/device-details-for-real.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FarmComponent,
    FooterComponent,
    EventsComponent,
    SettingsComponent,
    DevicesComponent,
    UsersComponent,
    DashboardComponent,
    CompaniesComponent,
    FarmDetailsComponent,
    MatTableComponent,
    DeviceDetailsComponent,
    DeviceDetailsForRealComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [
    FarmService,
   {provide: 'BaseURL', useValue: baseURL},
   ProcessHttpmgService,
   DeviceService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
