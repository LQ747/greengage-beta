import { Component, OnInit } from '@angular/core';
import { IListSensors } from '../shared/IListSensors';
import { SensorsService } from '../services/sensors.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {
   
     public sensorsData:IListSensors;
     public errMess:string;
     public availableSensors:boolean[];
     /* */
     public co2 = 'Not Available';
     public co2class: boolean;
     public Humidity = 'Not Available';
     public HumidityClass: boolean;
     public RGB = 'Not Available';
     public RGBClass: boolean;
     public NH3 = 'Not Available';
     public NH3Class: boolean;
     public Temperature = 'Not Available';
     public TempClass: boolean;




  constructor(private sensorsService:SensorsService,
    private location:Location, private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.sensorsService.getSensors(id)
    .subscribe(
      data =>this.writeAvailableSensors(data),
      erromes => this.errMess = <any> erromes
    );
  }

  goBack():void{
    this.location.back();
  }

  writeAvailableSensors(data) {
         if (data.sensors.hasOwnProperty('Co2')) {
           this.co2 = 'Available';
           if ( this.co2 === 'Available') {
            this.co2class = true;
           }else {
            this.co2class = false;
           }

         }
         if (data.sensors.hasOwnProperty('Humidity')) {
           this.Humidity = 'Available';
           if ( this.Humidity === 'Available') {
            this.HumidityClass = true;
           }else {
            this.HumidityClass = false;
           }
         }
         if (data.sensors.hasOwnProperty('NH3')) {
           this.NH3 = 'Available';
           if ( this.NH3 === 'Available') {
            this.NH3Class = true;
           }else {
            this.NH3Class = false;
           }
         }
         if (data.sensors.hasOwnProperty('RGB')) {
           this.RGB = 'Available';
           if ( this.RGB === 'Available') {
            this.RGBClass = true;
           }else {
            this.RGBClass = false;
           }
         }
         if (data.sensors.hasOwnProperty('Temperature')) {
           this.Temperature = 'Available';
           if ( this.Temperature === 'Available') {
            this.TempClass = true;
           }else {
            this.TempClass = false;
           }
         }

         this.sensorsData = data;
  }

}
