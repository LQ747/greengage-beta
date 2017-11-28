import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { IDevices } from '../shared/IDevices';



@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  
  public devices:IDevices;
  public errMess:string;
  public dtTable: any = null;

  
  public dtOptions: DataTables.Settings = {};

  constructor(private deviceService :DeviceService) { }

  ngOnInit() {

    this.deviceService.getAllDevices()
    .subscribe(
      devices => this.devices = devices,
      errmess => this.errMess =<any>errmess);

      this.dtOptions = {
        columnDefs: [{
          "targets": [ 3, 6 ],  //od predzadnje do zadnje kolone
          "orderable": false
        }],
        "order": [],
        "dom": '<"#new-search-area"f>t<"#new-pagination"lpi>',
        'initComplete': function () {
          this.dtTable = $('#example').DataTable();
          
          $('.dataTables_filter input').attr('placeholder', 'Search');
  
        }
      };
  }

  public showSensors():void{
     
  }
    

}
