import { Component, OnInit,Inject} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { ActionService } from '../services/action.service';
import { ITemp } from '../shared/ITemp';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { IActionCreate } from '../shared/IActionCreate';

@Component({
  selector: 'app-create-measurement',
  templateUrl: './create-measurement.component.html',
  styleUrls: ['./create-measurement.component.scss']
})
export class CreateMeasurementComponent implements OnInit {

  createActionForm:FormGroup;
  actionData:IActionCreate;
  formErrors = {
    'name': '',
    'measurment':'',
    'message':''
  };
  validationMessages = {
    
        'name': {
          'required':      'Action Name is required.',
          'minlength':     'Action Name must be at least 2 characters long.',
          'maxlength':     'Action Name cannot be more than 25 characters long.'
        },
        'measurment':{
          'required':      'Temperature is required.',
          'pattern':       'Temperature must contain only numbers.'       
        },
        'message':{
          'minlength':     'Last Name must be at least 2 characters long.',
          'maxlength':     'Last Name cannot be more than 25 characters long.'
        }
      };


      constructor(private actionService:ActionService, private fb: FormBuilder,public dialogRef: MatDialogRef<CreateMeasurementComponent>,
        @Inject(MAT_DIALOG_DATA) public data:string,public snackBar: MatSnackBar) {
          this.createForm();
         }

  ngOnInit() {
  }

  onCloseConfirm(){
    this.dialogRef.close('Confirm');
 }
 onCloseCancel(){
   this.dialogRef.close('Cancel');
 }

  public createForm():void{
    this.createActionForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      measurment:['', [Validators.required, Validators.pattern] ],
      message: ['',[Validators.minLength(2), Validators.maxLength(25)]]
     });

     this.createActionForm.valueChanges.subscribe(
       data => this.onValueChanged(data)
     );
  }
   
  public onValueChanged(data?:any):void{
    if(!this.createActionForm){return;}
   
    const form = this.createActionForm;

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

  public onSubmit():void{
    this.actionData = this.createActionForm.value;
    this.actionService.createAction(this.actionData.name,this.actionData.measurment,parseInt(this.data,10),
    this.actionData.message).subscribe(
      response => console.log(response),
      error => console.log(error)    
    )
    this.createActionForm.reset({
      name:'',
      measurment:'',
      message:''
    });
  }
}
