import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { Location } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';
import { IDeviceSingleMessage } from '../shared/IDeviceSingleMessage';

@Component({
  selector: 'app-user-real-device-details',
  templateUrl: './user-real-device-details.component.html',
  styleUrls: ['./user-real-device-details.component.scss']
})
export class UserRealDeviceDetailsComponent implements OnInit {
  public deviceData: IDeviceSingleMessage;
  public errMess:string;

  constructor(private deviceService: DeviceService,
    private location:Location,private rote:ActivatedRoute) { }


  ngOnInit() {
    let id = this.rote.snapshot.params['id']; 
    this.deviceService.getDeviceDetailsUser(id)
    .subscribe(
      data => this.deviceData = data,
      errmess => this.errMess = errmess);
  }

  goBack(): void {
    this.location.back();
  }

}
