import { Component, OnInit } from '@angular/core';
import { interfaceFarm } from '../shared/interfaceFarm';
import { Location } from '@angular/common';
import { FarmService } from '../services/farm.service';
import { IAction } from '../shared/IAction';


@Component({
  selector: 'app-user-farm',
  templateUrl: './user-farm.component.html',
  styleUrls: ['./user-farm.component.scss']
})
export class UserFarmComponent implements OnInit {


  public farm:interfaceFarm;
  public errMess:string;
  public action:IAction;
  lat: number ;
  lng: number ;
  zoomIn:number = 12;

  constructor(private farmService : FarmService,
  private location:Location) { }

  ngOnInit() {
    this.farmService.getMyFarm()
    .subscribe(
      data =>this.getData(data),
      errmess => this.errMess =<any>errmess);
  }

  goBack(): void {
    this.location.back();
  }

  public getData(data:interfaceFarm):void{
    this.action = data.farm.action;  
    this.farm = data;
    this.lat = parseFloat(data.farm.location.latitude);
    this.lng = parseFloat(data.farm.location.longitude);
  }

}
