import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../services/user.service';
import { IUsers } from '../shared/IUsers';
declare var swal: any;
import { IUser } from '../shared/IUser';
import { Http } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-company-users',
  templateUrl: './company-users.component.html',
  styleUrls: ['./company-users.component.scss']
})
export class CompanyUsersComponent implements OnInit {
        
  public usersData:IUsers;
  public errMess:string;
  public id:number;
  public dtOptions: DataTables.Settings = {};
  public dtTable: any = null;

  constructor(private userService : UserService,
    private location:Location,private authservice:AuthService, private route:ActivatedRoute,
    private http: Http,public snackbar:MatSnackBar) { }

    token = this.authservice.getToken();

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getCompanyUsers(this.id)
    .subscribe(
      data => this.usersData = data,
      errmess => this.errMess =<any>errmess);

      this.dtOptions = {
        columnDefs: [{
          "targets": [-1],  //od predzadnje do zadnje kolone
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

  onClickDelete(user:IUser){
    
       this.userService.deleteUser(user.id)
       .subscribe(
        success=>
        {
            var index = this.usersData.users.indexOf(user, 0);
            if (index > -1)
            {
              this.usersData.users.splice(index, 1);
              this.refreshCustomersList();
            }
        }
       );
    }

    refreshCustomersList()
    {
      this.userService.getCompanyUsers(this.id)
      .subscribe(
        data => this.usersData = data,
        errmess => this.errMess =<any>errmess);


      // this.http.get(baseURL + 'users/company/'+this.id+"?token="+this.token)
      //       .map(res=>res.json())
      //       .subscribe(
      //           successResponse=>
      //           {
      //               this.usersData.users = successResponse;
      //           },
      //           () => console.log("Request Completed")
      //       )
  
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
        this.snackbar.open("User successfully deleted !","Got it!",{
          duration:3000
        })
        
          
        })
    }


  goBack(): void {
    this.location.back();
  }

}
