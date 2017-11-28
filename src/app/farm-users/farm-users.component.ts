import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FarmService } from '../services/farm.service';
import { IFarmUsers } from '../shared/IFarmUsers';
import { IUser } from '../shared/IUser';
import { UserService } from '../services/user.service';
import { Http } from '@angular/http';
import { baseURL } from '../shared/baseurl';
declare var swal: any;

@Component({
  selector: 'app-farm-users',
  templateUrl: './farm-users.component.html',
  styleUrls: ['./farm-users.component.scss']
})
export class FarmUsersComponent implements OnInit {

  public users:IFarmUsers;
  public errMess:string;
  public dtTable: any = null;

  public dtOptions: DataTables.Settings = {};

  constructor(private farmService : FarmService,
    private location:Location, private route:ActivatedRoute,
    private userService:UserService,private http: Http) { }
    
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.farmService.getFarmUsers(id)
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

  onClickDelete(user:IUser){
    
       this.userService.deleteUser(user.id)
       .subscribe(
        success=>
        {
            var index = this.users.users.indexOf(user, 0);
            if (index > -1)
            {
              this.users.users.splice(index, 1);
              this.refreshCustomersList();
            }
        }
       );
    }
    refreshCustomersList()
    {
      this.http.get(baseURL + 'users')
            .map(res=>res.json())
            .subscribe(
                successResponse=>
                {
                    this.users.users = successResponse.data.users;
                },
                () => console.log("Request Completed")
            )
  
    }

    showAlert(user) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((isConfirm)=> {
       
        this.onClickDelete(user);
        
          
        })
    }

}
