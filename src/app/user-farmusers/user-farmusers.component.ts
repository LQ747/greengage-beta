import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FarmService } from '../services/farm.service';
import { IFarmUsers } from '../shared/IFarmUsers';
import { IUser } from '../shared/IUser';
import { UserService } from '../services/user.service';
import { Http } from '@angular/http';
import { baseURL } from '../shared/baseurl';
declare var swal: any;

@Component({
  selector: 'app-user-farmusers',
  templateUrl: './user-farmusers.component.html',
  styleUrls: ['./user-farmusers.component.scss']
})
export class UserFarmusersComponent implements OnInit {
  public users: IFarmUsers;
  public errMess: string;
  public dtTable: any = null;

  public dtOptions: DataTables.Settings = {};

  constructor(private farmService: FarmService,
    private location: Location,
    private userService: UserService, private http: Http) { }

  ngOnInit() {
    this.farmService.getMyFarmUsers()
    .subscribe(
      data => this.users = data,
      error => this.errMess = <any> error);

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
