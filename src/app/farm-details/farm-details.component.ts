import { Component, OnInit } from '@angular/core';
import { interfaceFarm } from '../shared/interfaceFarm';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FarmService } from '../services/farm.service';

@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  styleUrls: ['./farm-details.component.scss']
})
export class FarmDetailsComponent implements OnInit {

  public farm:interfaceFarm;
  public errMess:string;
  

  constructor(private farmService : FarmService,
  private location:Location, private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.farmService.getFarm(id)
    .subscribe(
      data => this.farm = data,
      errmess => this.errMess =<any>errmess);
  }

  goBack(): void {
    this.location.back();
  }

}
