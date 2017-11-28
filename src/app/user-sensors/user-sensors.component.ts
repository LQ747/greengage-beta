import { Component, OnInit } from '@angular/core';
import { IListSensors } from '../shared/IListSensors';
import { SensorsService } from '../services/sensors.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-sensors',
  templateUrl: './user-sensors.component.html',
  styleUrls: ['./user-sensors.component.scss']
})
export class UserSensorsComponent implements OnInit {
  public sensorsData:IListSensors;
  public errMess:string;
  public availableSensors:boolean[];

  public co2:string="Not Available";
  public Humidity:string="Not Available";
  public RGB:string="Not Available";
  public NH3:string="Not Available";
  public Temperature:string="Not Available";

  constructor(private sensorsService:SensorsService,
    private location:Location, private route:ActivatedRoute) { }
    

  ngOnInit() {

    this.sensorsService.getSensorsFromFarm()
    .subscribe(
      data => this.writeAvailableSensors(data),
      erromes => this.errMess = <any> erromes
    );
    
  }


  goBack():void{
    this.location.back();
  }

  
  writeAvailableSensors(data){
    if(data.sensors.hasOwnProperty("Co2")){
      this.co2 = "Available";
    }
    if(data.sensors.hasOwnProperty('Humidity')){
      this.Humidity = "Available";
    }
    if(data.sensors.hasOwnProperty('NH3')){
      this.NH3 = "Available";
    }
    if(data.sensors.hasOwnProperty('RGB')){
      this.RGB = "Available";
    }
    if(data.sensors.hasOwnProperty('Temperature')){
      this.Temperature = "Available";
    }

    this.sensorsData = data;
}
}
