import { Component, OnInit, } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IdeviceFar } from '../shared/IdeviceFar';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {
   
  public device:IdeviceFar;
  public errMess:string;

  constructor(private deviceService: DeviceService,
  private location:Location,private rote:ActivatedRoute) { }

  ngOnInit() {
    let id = this.rote.snapshot.params['id'];
    this.deviceService.getDeviceFromSingleFarm(id)
    .subscribe(
      data => this.device = data,
      errmess => this.errMess = errmess);
  }

  goBack(): void{
    this.location.back();
  }

}
