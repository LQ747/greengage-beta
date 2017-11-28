import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { IdeviceFar } from '../shared/IdeviceFar';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
   private devices: IdeviceFar;

  constructor(private deviceService :DeviceService) { }

  ngOnInit() {
  }
    

}
