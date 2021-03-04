import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;

  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
};

  constructor(private formBuilder : FormBuilder) {
    /*this.signupForm=formBuilder.group({
      'firstName':new FormControl(),
      'lastName': new FormControl(),
      'emailAddress': new FormControl(),
      'passwordValue' :new FormControl(),
      'confirmPasswordValue' : new FormControl(),
      'terms': new FormControl()
    });*/
    this.signupForm=formBuilder.group({
      firstName: ['',[
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.required

      ]],
      lastName: ['',[
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.required,
        

      ]],
      emailAddress:['',[
        Validators.minLength(8),
        Validators.maxLength(26),
        Validators.required,
        Validators.email

      ]], 
      passwordValue:['',[
        Validators.minLength(7),
        Validators.maxLength(15),
        Validators.required
      

      ]],
      confirmPasswordValue: ['',[
        Validators.minLength(7),
        Validators.maxLength(15),
        Validators.required

      ]],
      dateOfBirth: ['',Validators.requiredTrue],

      terms: ['',Validators.requiredTrue]
    }); 
  }


  ngOnInit(): void {
  }
  postData(){
    console.log(this.signupForm)
    console.log(this.signupForm.value);
  }
}
