import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ExportType } from '../shared/feedback';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-sineup',
  templateUrl: './sineup.component.html',
  styleUrls: ['./sineup.component.scss']
})
export class SineupComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  exportType = ExportType;
  name:string;

  formErrors = {
    'firstname': '',
    'lastname': '',
    'email': '',
    'password':'',
    'phone':'',
    'message':'',
    'exportType':'',
  };

  validationMessages= {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'First Name cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
    'password':{
      'required':      'Password is required.'
    },
    'phone':{
      'required':      'Phone is required.',
      'pattern':       'Tel. number must contain only numbers.'       
    },
    'message':{
      'minlength':     'Message must be at least 2 characters long.',
      'maxlength':     'Message cannot be more than 25 characters long.'
    },
    'exportType': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'First Name cannot be more than 25 characters long.'
    },
  };

  constructor(private fb: FormBuilder, private authService:AuthService) {
    this.createForm();  
  }

  ngOnInit() {
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      email: ['', [Validators.required, Validators.email] ],
      phone: [0,[Validators.required, Validators.pattern]],
      message: ['',[Validators.minLength(2), Validators.maxLength(25)]],
      exportType:'',
      agree: false,
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
    this.authService.signup(this.feedback.firstname,this.feedback.lastname,
    this.feedback.password,this.feedback.phone,this.feedback.email,this.feedback.message,
  this.feedback.exportType)
   .subscribe(
      response => console.log(response),
      error => console.log(error),
   );
  
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      email: '',
      password:'',
      phone:0,
      message:'',
      exportType:'',
      agree:'',
    });
  }
}