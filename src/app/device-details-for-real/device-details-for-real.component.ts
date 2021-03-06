import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IDeviceSingleMessage } from '../shared/IDeviceSingleMessage';

@Component({
  selector: 'app-device-details-for-real',
  templateUrl: './device-details-for-real.component.html',
  styleUrls: ['./device-details-for-real.component.scss']
})
export class DeviceDetailsForRealComponent implements OnInit {
   
  public deviceData: IDeviceSingleMessage;
  public errMess:string;

  constructor(private deviceService: DeviceService,
    private location:Location,private rote:ActivatedRoute) { }

  ngOnInit() {
    let id = this.rote.snapshot.params['id'];    
    this.deviceService.getDeviceDetails(id)
    .subscribe(
      data => this.deviceData = data,
      errmess => this.errMess = errmess);
    
  }

  goBack(): void {
    this.location.back();
  }

}
