import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { EventService } from '../services/event.service';
import { CompaniesService } from '../services/companies.service';
import { FarmService } from '../services/farm.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  userNumber:number;
  farmNumber:number;
  companyNumber:number;
  eventNumber:number;
  errorMesUser:string
  errorMesEvent:string;
  errorMesCompany:string;
  errorMesFarm:string;

constructor(private userService:UserService,
private eventService:EventService, private companiesService:CompaniesService,
private farmService:FarmService) { }

ngOnInit() {
 this.userService.getNumOfAllUsers()
 .subscribe(
   userNumber => this.userNumber = userNumber.users,
   error => this.errorMesUser = error
 )
 this.eventService.getNumberOfEvents()
 .subscribe(
  eventSub => this.eventNumber = eventSub.events,
  error => this.errorMesEvent = error
 )
 this.companiesService.getNumberOfCompanis()
 .subscribe(
   companSub => this.companyNumber = companSub.companies,
   error => this.errorMesCompany = error

 )
 this.farmService.getNumberOfFarms()
 .subscribe(
    farmSub => this.farmNumber = farmSub.farms,
    error => this.errorMesFarm = error
 )
}


}
