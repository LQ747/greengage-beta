import { Component, OnInit } from '@angular/core';
import { FarmService } from '../services/farm.service';
import { ActionService } from '../services/action.service';
import { ActivatedRoute } from '@angular/router';
import { interfaceFarm } from '../shared/interfaceFarm';
import { IAction } from '../shared/IAction';
import { Location } from '@angular/common';
import { EventService } from '../services/event.service';
import { IEventObjt } from '../shared/IEventObjt';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SetMeasurementComponent } from '../set-measurement/set-measurement.component';
import { CreateMeasurementComponent } from '../create-measurement/create-measurement.component';
import { DragScroll } from 'angular2-drag-scroll';

@Component({
  selector: 'app-temperature-alarm',
  templateUrl: './temperature-alarm.component.html',
  styleUrls: ['./temperature-alarm.component.scss']
})
export class TemperatureAlarmComponent implements OnInit {
 
  public farm:interfaceFarm;
  public errMess:string;
  public action:IAction; 
  public events: IEventObjt;
  public name:string;
  public dialogResult:string = "";
  public errorMessEvent:string;


  constructor(private farmService:FarmService,private actionService:ActionService,
    private route:ActivatedRoute,
    private location:Location,private eventService:EventService,public dialog: MatDialog) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.farmService.getFarm(id)
    .subscribe(
      data =>this.putData(data),
      errmess => this.errMess =<any>errmess);
  }
  public getEvents(id:number){
     this.eventService.getFarmEvents(id)
     .subscribe(
       data => this.events = data,
       errMess => this.errorMessEvent = <any>errMess
     );
  }

 public putData(data){
  this.farm = data;
  this.action = data.farm.action;
  this.getEvents(parseInt(data.farm.id,10));
 }
  
  goBack(): void {
    this.location.back();
  }

  openMeasForm(){
    if(this.action.measurment !== 0){
      let dialogRef = this.dialog.open(SetMeasurementComponent, {
        data:this.farm.farm.action.actionId
       });
       
       dialogRef.afterClosed().subscribe(result => {
        this.farmService.getFarm(this.farm.farm.id)
        .subscribe(
          data =>this.putData(data),
          errmess => this.errMess =<any>errmess);
       });      
    }
    else{
      let dialogRef = this.dialog.open(CreateMeasurementComponent, {
        data:this.farm.farm.id
       });
     
    }
  
  }
}

