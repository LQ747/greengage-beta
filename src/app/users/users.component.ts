import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { UserService } from '../services/user.service';
import { IUsers } from '../shared/IUsers';
import { IUser } from '../shared/IUser';
import { Http } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { AlertDeleteComponent } from '../alert-delete/alert-delete.component';
declare var swal: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

      public dtOptions: DataTables.Settings = {};
      @Output() userDeleted = new EventEmitter<IUser>();
      public errMess:string;
      public usersData:IUsers;
      public dtTable: any = null;

  constructor(private userService : UserService,private http: Http,
    @Inject('BaseURL') private BaseURL,private dialog: MatDialog,public snackbar:MatSnackBar) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe( 
      users => this.usersData = users,
      errmess => this.errMess = <any> errmess);

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
  openAlertDialog(){
    this.dialog.open(AlertDeleteComponent, {width:'400px',height:'350px'});
  }

  onClickDelete(user:IUser)
  {
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
    this.http.get(baseURL + 'users')
          .map(res=>res.json())
          .subscribe(
              successResponse=>
              {
                  this.usersData.users = successResponse.data.users;
              },
              () => console.log('Request Completed')
          )

  }
  showAlert(user) {
    swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((isConfirm)=> {

      this.onClickDelete(user);

      this.snackbar.open("User deleted !","Got it!",{
        duration:3000
      });
      
        
      })
  }
}
