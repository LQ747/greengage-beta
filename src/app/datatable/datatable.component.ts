import { Component, OnInit,Inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUsers } from '../shared/IUsers';
import { IUser } from '../shared/IUser';



@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls:['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  public usersData:IUsers;
  public errMess:string;

  constructor(private userService : UserService,
    @Inject('BaseURL') private BaseURL) {
    
   }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(
      users => this.usersData = users,
      errmess => this.errMess = <any> errmess
    );
  }

}
