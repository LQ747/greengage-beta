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
import {MatPaginatorModule, MatSnackBarModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RestangularModule, Restangular } from 'ngx-restangular';


import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FarmComponent } from './farm/farm.component';
import { FarmDetailsComponent } from './farm-details/farm-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { DevicesComponent } from './devices/devices.component';
import { SettingsComponent } from './settings/settings.component';
import { EventsComponent } from './events/events.component';
import { MatTableComponent } from './mat-Table/mat-Table.component';
import { UsersTableComponent} from './users-table/users-table.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DeviceDetailsForRealComponent } from './device-details-for-real/device-details-for-real.component';
import { DataTablesModule } from 'angular-datatables';


import { FarmService } from './services/farm.service';
import { ProcessHttpmgService } from './services/process-httpmg.service';
import { DeviceService } from './services/device.service';
import { UserTableServiceService } from './services/user-table-service.service';

import 'hammerjs';

import {baseURL} from './shared/baseUrl';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RestangularConfigFactory } from './shared/restConfig';
import { SensorComponent } from './sensor/sensor.component';
import { SensorsService } from './services/sensors.service';
import { MeasurementComponent } from './measurement/measurement.component';
import { MeasurmentService } from './services/measurment.service';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompaniesService } from './services/companies.service';
import { CompanisFarmsComponent } from './companis-farms/companis-farms.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserService } from './services/user.service';
import { CompanyUsersComponent } from './company-users/company-users.component';
import { DatatableComponent } from './datatable/datatable.component';
import { SineupComponent } from './sineup/sineup.component';
import { SineinComponent } from './sinein/sinein.component';
import { AuthService } from './services/auth.service';
import { LoggedInGuard } from './logged-in.guard';
import { TestComponent } from './test/test.component';
import { FarmUsersComponent } from './farm-users/farm-users.component';
import { EventService } from './services/event.service';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { AlertDeleteComponent } from './alert-delete/alert-delete.component';
import { FarmChartsComponent } from './farm-charts/farm-charts.component';
import { TemperatureAlarmComponent } from './temperature-alarm/temperature-alarm.component';
import { ActionService } from './services/action.service';
import { SetMeasurementComponent } from './set-measurement/set-measurement.component';
import { CreateFarmComponent } from './create-farm/create-farm.component';
import { AgmCoreModule } from '@agm/core';
import { CreateMeasurementComponent } from './create-measurement/create-measurement.component';

import { UserAlarmsComponent } from './user-alarms/user-alarms.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserEventsComponent } from './user-events/user-events.component';
import { UserGraphsComponent } from './user-graphs/user-graphs.component';
import { UserDevicedetailsComponent } from './user-devicedetails/user-devicedetails.component';
import { UserFarmusersComponent } from './user-farmusers/user-farmusers.component';
import { UserBotbarComponent } from './user-botbar/user-botbar.component';


import { DragScrollModule } from 'angular2-drag-scroll';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SnackBarV2Component } from './snack-bar-v2/snack-bar-v2.component';
import { FarmEventsComponent } from './farm-events/farm-events.component';
import { RoleGuardGuard } from './role-guard.guard';
import { CompanyAdminFarmsComponent } from './company-admin-farms/company-admin-farms.component';
import { CompanyAdminEventsComponent } from './company-admin-events/company-admin-events.component';
import { UserFarmComponent } from './user-farm/user-farm.component';
import { ComponentComunicationService } from './services/component-comunication.service';
import { UserSensorsComponent } from './user-sensors/user-sensors.component';
import { UserRealDeviceDetailsComponent } from './user-real-device-details/user-real-device-details.component';
import { UserFarmCahrtComponent } from './user-farm-cahrt/user-farm-cahrt.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ActionTempComponent } from './action-temp/action-temp.component';
import { SnackBarUserComponent } from './snack-bar-user/snack-bar-user.component';




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
    UsersTableComponent,
    MatTableComponent,
    DeviceDetailsComponent,
    SensorComponent,
    ChartComponent,
    MeasurementComponent,
    ChartComponent,
    CompaniesComponent,
    DeviceDetailsForRealComponent,
    DeviceDetailsForRealComponent,
    CompanisFarmsComponent,
    UserdetailsComponent,
    CompanyUsersComponent,
    DatatableComponent,
    SineupComponent,
    SineinComponent,
    TestComponent,
    FarmUsersComponent,
    SnackBarComponent,
    AlertDeleteComponent,
    FarmChartsComponent,
    TemperatureAlarmComponent,
    SetMeasurementComponent,
    CreateFarmComponent,
    CreateMeasurementComponent,
    EditUserComponent,
    SnackBarV2Component,
    FarmEventsComponent,
    UserFarmComponent,
    UserAlarmsComponent,
    UserSettingsComponent,
    UserEventsComponent,
    UserDevicedetailsComponent,
    UserFarmusersComponent,
    UserGraphsComponent,
    UserBotbarComponent,
    UserSensorsComponent,
    UserRealDeviceDetailsComponent,
    UserFarmCahrtComponent,
    CreateCompanyComponent,
    CompanyAdminFarmsComponent,
    CompanyAdminEventsComponent,
    ActionTempComponent,
    SnackBarUserComponent
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
    ChartsModule,
    ReactiveFormsModule,
    DataTablesModule,
    DragScrollModule,
  AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDkgXgjCSmuqJQ-RvMriIp1HAorZR9PxXM'
    }),
    MatSnackBarModule
 
  ],
  providers: [
    FarmService,
   {provide: 'BaseURL', useValue: baseURL},
   ProcessHttpmgService,
   UserTableServiceService,
   DeviceService,
   SensorsService,
   MeasurmentService,
   CompaniesService,
   UserService,
   AuthService,
   LoggedInGuard,
   EventService,
   ActionService,
   RoleGuardGuard,
   ComponentComunicationService
   
],
entryComponents: [
  SnackBarComponent,
  AlertDeleteComponent,
  SetMeasurementComponent,
  CreateMeasurementComponent,
  EditUserComponent,
  CreateCompanyComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
