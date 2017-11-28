import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { FeedbackSineIn } from '../shared/FeedbackSineIn';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ComponentComunicationService } from '../services/component-comunication.service';

@Component({
  selector: 'app-sinein',
  templateUrl: './sinein.component.html',
  styleUrls: ['./sinein.component.scss']
})
export class SineinComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: FeedbackSineIn;
  name:string;
  public show;
  private addedItem:boolean;
  private addedItem2:boolean;
  
  
  formErrors = {
    'email': '',
    'password':'',
  
  };


  validationMessages= {
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
    'password':{
      'required':      'Password is required.'
    },
    
  };

  constructor(private ComunSerice:ComponentComunicationService,private fb: FormBuilder, private authService:AuthService, private router: Router, ) {
    this.createForm();  
    this.show = this.authService.isLoggedIn();
    this.addedItem = ComunSerice.getShowBar();
    this.addedItem2 = ComunSerice.getUserBar();
    
  }
   add(value:boolean){
     this.ComunSerice.cangeShowBar(value);
   }
   add2(value:boolean){
    this.ComunSerice.changeUserBar(value);
  }
  ngOnInit() {
  }
 
  createForm() {
    this.feedbackForm = this.fb.group({ 
      password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      email: ['', [Validators.required, Validators.email] ],
    });

    this.feedbackForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
 
  }
    onValueChanged(data?: any) {
      if (!this.feedbackForm) { return; }
      const form = this.feedbackForm;
  
      for (const field in this.formErrors) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            this.formErrors[field] += messages[key] + ' ';
          }
        }
      }
    }

    onSubmit() {
      this.feedback = this.feedbackForm.value;
      this.authService.sinein(this.feedback.email,this.feedback.password)
      .subscribe((result) =>{
        
        if(result.decoded.role == 3){
         this.add(true);  
        }
        else{
          this.add2(true);
        }    
        if(result){
          this.router.navigate([''])
        
        }
      }
  
      );
      
      this.feedbackForm.reset({
        email: '',
        password:'',
       
      });

      // this.dialogRef.close();
      // this.show = !this.show;
    }

    public Logout():void{
      this.authService.logout();
    }


}
