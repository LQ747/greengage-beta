import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { FarmComponent } from '../farm/farm.component';
import { CompaniesComponent } from '../companies/companies.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UsersComponent } from '../users/users.component';
import { DevicesComponent } from '../devices/devices.component';
import { SettingsComponent } from '../settings/settings.component';
import { EventsComponent } from '../events/events.component';
import { FarmDetailsComponent } from '../farm-details/farm-details.component';
import { DeviceDetailsComponent } from '../device-details/device-details.component';
import { DeviceDetailsForRealComponent } from '../device-details-for-real/device-details-for-real.component';
import { SensorComponent } from '../sensor/sensor.component';
import { MeasurementComponent } from '../measurement/measurement.component';
import { ChartComponent } from '../chart/chart.component';
import { CompanisFarmsComponent } from '../companis-farms/companis-farms.component';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { CompanyUsersComponent } from '../company-users/company-users.component';
import { SineupComponent } from '../sineup/sineup.component';
import { SineinComponent } from '../sinein/sinein.component';
import { LoggedInGuard } from '../logged-in.guard';
import { TestComponent } from '../test/test.component';
import { FarmUsersComponent } from '../farm-users/farm-users.component';
import { FarmChartsComponent } from '../farm-charts/farm-charts.component';
import { TemperatureAlarmComponent } from '../temperature-alarm/temperature-alarm.component';
import { FarmEventsComponent } from '../farm-events/farm-events.component';
import { CreateFarmComponent } from '../create-farm/create-farm.component';
import { RoleGuardGuard } from '../role-guard.guard';
import { UserFarmComponent } from '../user-farm/user-farm.component';
import { UserAlarmsComponent } from '../user-alarms/user-alarms.component';
import { UserSettingsComponent } from '../user-settings/user-settings.component';
import { UserEventsComponent } from '../user-events/user-events.component';
import { UserGraphsComponent } from '../user-graphs/user-graphs.component';
import { UserFarmusersComponent } from '../user-farmusers/user-farmusers.component';
import { UserDevicedetailsComponent } from '../user-devicedetails/user-devicedetails.component';
import { UserSensorsComponent } from '../user-sensors/user-sensors.component';
import { UserRealDeviceDetailsComponent } from '../user-real-device-details/user-real-device-details.component';
import { UserFarmCahrtComponent } from '../user-farm-cahrt/user-farm-cahrt.component';



export const routes: Routes = [
    {path: 'menu', component: MenuComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'users', component: UsersComponent, canActivate: [LoggedInGuard] ,data: { expectedRole: '3'} },
    {path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'companies', component: CompaniesComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'farms', component: FarmComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'devices', component: DevicesComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'farmcharts/:id', component: FarmChartsComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'events', component: EventsComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'settings', component: SettingsComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'}},
    {path: 'farmdetails/:id', component:FarmDetailsComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'tempalarm/:id', component:TemperatureAlarmComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'devicedetails/:id', component:DeviceDetailsComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'realdetails/:id', component:DeviceDetailsForRealComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'sensors/:id', component:SensorComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'measurement/:id',component:MeasurementComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'chart',component:ChartComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'} },
    {path:  'companyfarms/:id',component:CompanisFarmsComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'userdetails/:id',component:UserdetailsComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'compantusers/:id',component:CompanyUsersComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'farmusers/:id',component:FarmUsersComponent, canActivate: [LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'farmevents/:id', component:FarmEventsComponent,canActivate:[LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'createfarm/:id',component:CreateFarmComponent, canActivate:[LoggedInGuard],data: { expectedRole: '3'} },
    {path: 'test',component:TestComponent,canActivate: [LoggedInGuard],data: { expectedRole: '1'}},
    {path: 'yourFarm',component:UserFarmComponent,canActivate:[LoggedInGuard], data:{expectedRole:'1'}},
    {path: 'sineup',component:SineupComponent},
    {path: 'signin',component:SineinComponent},
    {path: 'usergraphs', component: UserGraphsComponent, canActivate: [LoggedInGuard], data: { expectedRole: '1'}},
    {path: 'userevents', component: UserEventsComponent, canActivate: [LoggedInGuard], data: { expectedRole: '1'}},
    {path: 'usersettings', component: UserSettingsComponent, canActivate: [LoggedInGuard], data: { expectedRole: '1'}},
    {path: 'useralarms', component: UserAlarmsComponent, canActivate: [LoggedInGuard], data: { expectedRole: '1'}},
    {path: 'userfarmusers', component: UserFarmusersComponent, canActivate: [LoggedInGuard], data: { expectedRole: '1'}},
    {path: 'userdevicedetails', component: UserDevicedetailsComponent, canActivate: [LoggedInGuard], data: { expectedRole: '1'}},
    {path: 'usersensors',component:UserSensorsComponent, canActivate:[LoggedInGuard], data:{expectedRole:'1'}},
    {path: 'userrealdevicedetails/:id', component:UserRealDeviceDetailsComponent, canActivate:[LoggedInGuard],data:{expectedRole:'1'}},
    {path: 'devicesCharts/:id', component:UserFarmCahrtComponent, canActivate:[LoggedInGuard],data:{expectedRole:'1'}},
    {path: '', redirectTo: '/menu', pathMatch: 'full'}
];
