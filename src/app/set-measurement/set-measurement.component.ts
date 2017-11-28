import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { feedbackTemp} from '../shared/feedbackTemp';
import { ActionService } from '../services/action.service';
import { ITemp } from '../shared/ITemp';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import {FormControl} from '@angular/forms';
import {MatSelectChange} from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'app-set-measurement',
  templateUrl: './set-measurement.component.html',
  styleUrls: ['./set-measurement.component.scss']
})
export class SetMeasurementComponent implements OnInit {

  floatPlaceholder = 'auto';

  alarms = [
    {value: 'steak-0', viewValue: 'All Times'},
    {value: 'pizza-1', viewValue: 'Every Hour'},
    {value: 'tacos-2', viewValue: 'On Change'}
  ];

  actions = [
    {value: 'steak-0', viewValue: 'SMS to User'},
    {value: 'pizza-1', viewValue: 'Email to User'}
  ];

  conditions = [
    {value: 'steak-0', viewValue: 'Value More'},
    {value: 'pizza-1', viewValue: 'Value Less'}
  ];

  public name: number;
  feedbackForm: FormGroup;
  feedback: feedbackTemp;
  temp: ITemp;
  formErrors = {
    'measurment': ''
  };

  validationMessages = {

    'measurment': {
      'required':      'measurment is required.',
      'pattern':       'measurment must contain only numbers.'
    }
  };


  constructor(private actionService: ActionService, private fb: FormBuilder, public dialogRef: MatDialogRef<SetMeasurementComponent>,
  @Inject(MAT_DIALOG_DATA) public data: string, public snackBar: MatSnackBar) {
    this.createForm();
   }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.temp = this.feedbackForm.value;  
    this.actionService.setMaxTemp(this.temp.measurment, parseInt(this.data))
    .subscribe(
      response => this.info(),
      error => console.log(error)
    )
    this.feedbackForm.reset({
      measurment: ''
    });
  }

  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }

  createForm() {
     this.feedbackForm = this.fb.group({
      measurment: ['', [Validators.required, Validators.pattern] ]
     });

     this.feedbackForm.valueChanges
     .subscribe(data => this.onValueChanged(data));

   this.onValueChanged(); // (re)set validation messages now
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

  public info(){
    this.dialogRef.close('Confirm');
    this.snackBar.open('Temperature successfully changed','Got it!',{
      duration:3000
    });
  }
}
