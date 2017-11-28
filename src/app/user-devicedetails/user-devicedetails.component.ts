import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IdeviceFar } from '../shared/IdeviceFar';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-user-devicedetails',
  templateUrl: './user-devicedetails.component.html',
  styleUrls: ['./user-devicedetails.component.scss']
})
export class UserDevicedetailsComponent implements OnInit {

  public device: IdeviceFar;
  public errMess: string;
  public dtTable: any = null;

  public dtOptions: DataTables.Settings = {};

    constructor(private deviceService: DeviceService,
    private location: Location) { }

    ngOnInit() {
      this.deviceService.getMyDevices()
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

    goBack(): void {
      this.location.back();
    }

  }
