import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { ISingleUser } from '../shared/ISingleUser';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
 public userData:ISingleUser;
 public errMess:string;

  constructor(private userService:UserService,private authService:AuthService) {
    
  }
  ngOnInit() {
   this.userService.getMyDetails(this.authService.getUserId())
   .subscribe(
      user => this.userData = user,
      error => this.errMess = <any>error
   );
  }

}
