import { Component, OnInit } from '@angular/core';
import { ISingleUser } from '../shared/ISingleUser';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  public errMess:string;
  public userData:ISingleUser; 

  constructor(private userService:UserService,private authService:
  AuthService) { }

  ngOnInit() {

    this.userService.getMyDetails(this.authService.getUserId())
    .subscribe(
      data => this.userData = data,
      errorMes => this.errMess = errorMes
    );
  }

}
