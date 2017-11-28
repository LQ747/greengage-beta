import { Component, OnInit,Inject } from '@angular/core';
import { EventService } from '../services/event.service';
import { IEventObjt } from '../shared/IEventObjt';
import { DragScroll } from 'angular2-drag-scroll';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
    public eventObj:IEventObjt;
    public errMes:string;

  constructor(private eventService: EventService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.eventService.getEvents()
    .subscribe(
      data => this.eventObj = data,
      error => this.errMes = <any> error
    );
  }

}
