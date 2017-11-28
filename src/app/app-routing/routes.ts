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

export const routes: Routes = [
    {path: 'menu', component: MenuComponent},
    {path: 'users', component: UsersComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'companies', component: CompaniesComponent},
    {path: 'farms', component: FarmComponent},
    {path: 'devices', component: DevicesComponent},
    {path: 'events', component: EventsComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'farmdetails/:id', component:FarmDetailsComponent},
    {path: 'devicedetails/:id', component:DeviceDetailsComponent},
    {path: 'realdetails/:id', component:DeviceDetailsForRealComponent},
    {path: '', redirectTo: '/menu', pathMatch: 'full'}
];
