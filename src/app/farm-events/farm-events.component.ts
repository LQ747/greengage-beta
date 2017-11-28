import { Component, OnInit ,Inject} from '@angular/core';
import { EventService } from '../services/event.service';
import { IEventObjt } from '../shared/IEventObjt';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DragScroll } from 'angular2-drag-scroll';

@Component({
  selector: 'app-farm-events',
  templateUrl: './farm-events.component.html',
  styleUrls: ['./farm-events.component.scss']
})
export class FarmEventsComponent implements OnInit {

  public FarmsEvents:IEventObjt;
  public errMess:string;

  constructor(private eventService: EventService,
    @Inject('BaseURL') private BaseURL,private location:Location, private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.eventService.getFarmEvents(id)
    .subscribe(
      data => this.FarmsEvents = data,
      errorMes => this.errMess = <any> errorMes
    );
  }

  goBack(): void {
    this.location.back();
  }


}
