import { Component, OnInit,Inject } from '@angular/core';
import { EventService } from '../services/event.service';
import { IEventObjt } from '../shared/IEventObjt';
import { Location } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-company-admin-events',
  templateUrl: './company-admin-events.component.html',
  styleUrls: ['./company-admin-events.component.scss']
})
export class CompanyAdminEventsComponent implements OnInit {
  public eventObj:IEventObjt;
  public errMes:string;


  constructor(private eventService: EventService,private location:Location, private route:ActivatedRoute,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.eventService.getCompanyEvents(id)
    .subscribe(
        
    );
  }

}
