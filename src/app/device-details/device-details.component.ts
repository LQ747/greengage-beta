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
  public dtTable: any = null;
  public dtOptions: DataTables.Settings = {};

  constructor(private deviceService: DeviceService,
  private location:Location,private rote:ActivatedRoute) { }

  ngOnInit() {
    let id = this.rote.snapshot.params['id'];
    this.deviceService.getDeviceFromSingleFarm(id)
    .subscribe(
      data => this.device = data,
      errmess => this.errMess = errmess);

      this.dtOptions = {
        columnDefs: [{
          "targets": [-2, -1],  //od predzadnje do zadnje kolone
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

  goBack(): void{
    this.location.back();
  }

}
