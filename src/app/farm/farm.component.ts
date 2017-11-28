import { Component, OnInit , Inject } from '@angular/core';
import { IFarms } from '../shared/IFarms';
import { FarmService } from '../services/farm.service';
import { interfaceFarm } from '../shared/interfaceFarm';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent implements OnInit {
  public errMess:string;
  public data:IFarms;

  constructor(private farmService:FarmService,
    @Inject('BaseURL') private BaseURL ) { }

  ngOnInit() {
     this.farmService.getFarms()
    .subscribe(
    farms => this.data = farms,
    errmess => this.errMess =<any>errmess); 
  }

}
