import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EventService } from '../services/event.service';
import { IEventObjt } from '../shared/IEventObjt';
import { DragScroll } from 'angular2-drag-scroll';


@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.scss']
})
export class UserEventsComponent implements OnInit {
  public eventObj:IEventObjt;
  public errMes:string; 

  constructor(private eventService:EventService,private location:Location) { }

  ngOnInit() {
    this.eventService.getMyFarmEvents()
    .subscribe(
      data => this.eventObj = data,
      error => this.errMes = <any> error
    );
  }

}
