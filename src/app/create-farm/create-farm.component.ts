import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import { ICreatFarm } from '../shared/ICreatFarm';
import { FarmService } from '../services/farm.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-farm',
  templateUrl: './create-farm.component.html',
  styleUrls: ['./create-farm.component.scss']
})
export class CreateFarmComponent implements OnInit {

   public createFarm:FormGroup;
   public farmData:ICreatFarm;
   public id:number;

   formErrors = {
    'houseName':'',
    'location':'',
    'latitude':'',
    'longitude':'',
    'length':'',
    'width':'',
    'key_dates':'',
  }

  validationMessages = {
    'houseName':{
           'minlength':     'House Name must be at least 2 characters long.',
           'maxlength':     'House Name cannot be more than 25 characters long.',
           'required':      'House Name is required'
    },
    'location':{
           'minlength':     'Location must be at least 2 characters long.',
           'maxlength':     'Location cannot be more than 25 characters long.',
           'required':      'Location is required'
     },
     'latitude':{
      'minlength':     'House Name must be at least 2 characters long.',
      'maxlength':     'House Name cannot be more than 25 characters long.',
      'required':      'House Name is required'
    },
    'longitude':{
      'minlength':     'House Name must be at least 2 characters long.',
      'maxlength':     'House Name cannot be more than 25 characters long.',
      'required':      'House Name is required'
    },
    'length':{
      'pattern':       'Length must contain only numbers.',
      'required':      'Length is required'
    },
    'width':{
      'pattern':       'Width must contain only numbers.',
      'required':      'Width is required'
    },
    'key_dates':{
      'minlength':     'Key_dates  must be at least 2 characters long.',
      'maxlength':     'Key_dates  cannot be more than 25 characters long.',
      'required':      'Key_dates  is required'
}
}

  // tslint:disable-next-line:max-line-length
  constructor(private router:Router,private location:Location, private route:ActivatedRoute, public snackbar:MatSnackBar,private fb: FormBuilder,private farmService:FarmService) {
    this.createForm();
   }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }


  public createForm():void{
    this.createFarm = this.fb.group({
    houseName:['',[Validators.required, Validators.minLength(2),Validators.maxLength(25)]],
    location:['',[Validators.required, Validators.minLength(2),Validators.maxLength(25)]],
    latitude:['',[Validators.required, Validators.minLength(2),Validators.maxLength(25)]],
    longitude:['',[Validators.required, Validators.minLength(2),Validators.maxLength(25)]],
    length:['', [Validators.required, Validators.pattern]],
    width:['', [Validators.required, Validators.pattern]],
    key_dates:['',[Validators.required, Validators.minLength(2),Validators.maxLength(25)]],
    });

    this.createFarm.valueChanges
    .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
  onValueChanged(data?: any) {
    if (!this.createFarm) { return; }
    const form = this.createFarm;

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
   this.farmData = this.createFarm.value;
   this.farmService.createFarm(
   this.farmData.houseName,
   this.farmData.location,
   this.farmData.latitude,
   this.farmData.longitude,
   this.farmData.length,
   this.farmData.width,
   this.farmData.key_dates,
   this.id).subscribe(
    response => this.info(),
    error => console.log(error)
  
  )
  
  this.createFarm.reset({
    houseName:'',
    location:'',
    latitude:'',
    longitude:'',
    length:'',
    width:'',
    key_dates:'',
  });
  }


  goBack(): void {
    this.router.navigate(['/companies']);
  }

  public info(){
    this.snackbar.open("Farm successfully created !","Got it!",{
      duration:3000
    });
    this.router.navigate(['/companies']);
  }
}
