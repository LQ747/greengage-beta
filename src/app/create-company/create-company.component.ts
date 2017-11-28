import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatSnackBar, MatSnackBarModule} from '@angular/material';
import { ICreateFarm } from '../shared/ICreateFarm';
import { CompaniesService } from '../services/companies.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {

  public createCompanyForm:FormGroup;
  public companyData:ICreateFarm;
  public errMess:string;

  formErrors = {
    'name':'',
    'location':'',
    'zip':'',
    'email':'',
    'phone':'',
  }

  validationMessages = {
    'name':{
           'minlength':     'Name must be at least 2 characters long.',
           'maxlength':     'Name cannot be more than 25 characters long.'
    },
    'location':{
           'minlength':     'Location must be at least 2 characters long.',
           'maxlength':     'Location cannot be more than 25 characters long.'
     },
     'zip':{
      'minlength':     'Zip must be at least 2 characters long.',
      'maxlength':     'Zip cannot be more than 25 characters long.'
    },  
     'email': {
             'email':         'Email not in valid format.'
     },
     'phone':{
      'pattern':       'Phone must contain only numbers.'
},

}

  constructor(private companyService:CompaniesService ,public snackbar:MatSnackBar , private fb: FormBuilder, public dialogRef: MatDialogRef<CreateCompanyComponent>)
  {
    this.createForm();
   }

  ngOnInit() {
 
  }
  public onCloseConfirm():void{
    this.companyData = this.createCompanyForm.value;
    this.companyService.createCompany(
    this.companyData.name,
    this.companyData.location,
    this.companyData.zip,
    this.companyData.email,
    this.companyData.phone
   ).subscribe(
     response => this.info(),
     error => console.log(error)
   
   )
   
   this.createCompanyForm.reset({
     name:'',
     location:'',
     zip:'',
     email:'',
     phone:'',
   });
  
 }
 public onCloseCancel():void{
   this.dialogRef.close('Cancel');
 }

  public createForm():void{
    this.createCompanyForm = this.fb.group({
      name:['',[Validators.minLength(2),Validators.maxLength(25)]],
      location:['',[Validators.minLength(2),Validators.maxLength(25)]],
      zip:['',[Validators.minLength(2),Validators.maxLength(25)]],
      email:['',[Validators.email]],
      phone:['', [Validators.pattern]],
      
    });
 
    this.createCompanyForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );
 
  }

  public onValueChanged(data?:any):void{
    if(!this.createCompanyForm){return;}
   
    const form = this.createCompanyForm;
  
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
    this.snackbar.open("Company created successfully !","Got it!",{
      duration:3000
    });
  }
}
