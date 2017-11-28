import { Component, OnInit } from '@angular/core';
import { ISingleUser } from '../shared/ISingleUser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public errMess:string;
  public userData:ISingleUser; 


  constructor(private userService:UserService) {
  
   }
  
  ngOnInit() { 
    
    this.userService.getUser(1)
    .subscribe(
      data => this.userData = data,
      errorMes => this.errMess = errorMes
    );
    
  }
  
}