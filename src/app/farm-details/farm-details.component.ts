import { Component, OnInit } from '@angular/core';
import { interfaceFarm } from '../shared/interfaceFarm';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FarmService } from '../services/farm.service';
import { IAction } from '../shared/IAction';


@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  styleUrls: ['./farm-details.component.scss']
})
export class FarmDetailsComponent implements OnInit {

  public farm:interfaceFarm;
  public errMess:string;
  public action:IAction;
  lat: number ;
  lng: number ;
  zoomIn:number = 12;

  constructor(private farmService : FarmService,
  private location:Location, private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.farmService.getFarm(id)
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
