import { Component, OnInit,Inject} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatSnackBar, MatSnackBarModule} from '@angular/material';
import { IEditUser } from '../shared/IEditUser';
import { UserService } from '../services/user.service';
import { ISingleUser } from '../shared/ISingleUser';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

   public editForm:FormGroup;
   public editData:IEditUser;
   public errMess:string;
   public userData:ISingleUser;

   formErrors = {
     'firstName':'',
     'lastName':'',
     'phone':'',
     'email':'',
     'message':'',
     'exportType':''
   }

   actions = [
    {value: 'steak-0', viewValue: 'SMS to User'},
    {value: 'pizza-1', viewValue: 'Email to User'}
  ];

   validationMessages = {
         'firstName':{
                'minlength':     'First Name must be at least 2 characters long.',
                'maxlength':     'first Name cannot be more than 25 characters long.'
         },
         'lastName':{
                'minlength':     'Last Name must be at least 2 characters long.',
                'maxlength':     'Last Name cannot be more than 25 characters long.'
          },
          'phone':{
                 'pattern':       'Phone must contain only numbers.'
          },
          'email': {
                  'email':         'Email not in valid format.'
          },
          'message':{
                  'minlength':     'Message must be at least 2 characters long.',
                  'maxlength':     'Message cannot be more than 25 characters long.'
          },
          'exportType': {
            'minlength':     'First Name must be at least 2 characters long.',
            'maxlength':     'First Name cannot be more than 25 characters long.'
          },
   }

  constructor(public snackbar:MatSnackBar , private fb: FormBuilder, public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data:string,private userService:UserService) {
      this.createForm();
     }

  ngOnInit() {
    this.userService.getUser(this.data).subscribe(
      data => this.userData = data,
      error => this.errMess = <any> error
    );
  }

 public onCloseConfirm():void{
  this.editData = this.editForm.value;
  this.userService.editUser(
    parseInt(this.data,10),
    this.editData.firstName,
    this.editData.lastName,
    this.editData.phone,
    this.editData.email,
    this.editData.message,
    this.editData.exportType  
  ).subscribe(
    response => this.info(),
    error => console.log(error)
  )
  this.editForm.reset({
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
    message:'',
    exportType:''
  });
 }
 public onCloseCancel():void{
   this.dialogRef.close('Cancel');
 }
 
 public createForm():void{
   this.editForm = this.fb.group({
    firstName:['',[Validators.minLength(2),Validators.maxLength(25)]],
    lastName:['',[Validators.minLength(2),Validators.maxLength(25)]],
    phone:['', [Validators.pattern]],
    email:['',[Validators.email]],
    message:['',[Validators.minLength(2), Validators.maxLength(25)]],
    exportType:['',[Validators.minLength(2),Validators.maxLength(25)]]

   });

   this.editForm.valueChanges.subscribe(
     data => this.onValueChanged(data)
   );

 }

 public onValueChanged(data?:any):void{
  if(!this.editForm){return;}
 
  const form = this.editForm;

  for(const field in this.formErrors){
    this.formErrors[field]='';
    const control = form.get(field);
    if(control && control.dirty && !control.valid){
      const messages = this.validationMessages[field];
      for(const key in control.errors){
         this.formErrors[field] += messages[key]+ '';
      }
    }
  }
}

public info(){
  this.dialogRef.close('Confirm');
  this.snackbar.open("User edited successfully !","Got it!",{
    duration:3000
  });
}

}
