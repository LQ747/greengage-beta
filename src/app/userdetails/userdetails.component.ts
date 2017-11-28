import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../services/user.service';
import { ISingleUser } from '../shared/ISingleUser'
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  
  public errMess:string;
  public userData:ISingleUser;

  constructor(private userService : UserService,
    private location:Location, private route:ActivatedRoute,public dialog:MatDialog) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.userService.getUser(id)
    .subscribe(
      data => this.userData = data,
      errorMes => this.errMess = <any>errorMes
    );
  }
  goBack():void{
    this.location.back();
  }

  public openEditForm():void{
     let dialogRef = this.dialog.open(EditUserComponent,{
       data:this.userData.user.id
     });

   dialogRef.afterClosed().subscribe(result => {
     this.userService.getUser(this.userData.user.id)
     .subscribe(
       data => this.userData = data,
       error => this.errMess = error);
   });
  }


}
