import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.page.html',
  styleUrls: ['./registeration.page.scss'],
})
export class RegisterationPage implements OnInit {
  public RegisterForm: FormGroup;
  validation_messages = {
    'firstName': [
        { type: 'required', message: 'First name is required.' }
      ],
      'lastName': [
        { type: 'required', message: 'Last name is required.' }
      ],
      'email':[
        { type: 'required', message: 'Email is required.' },
        { type: 'pattern', message: 'ex: example@example.com'}
      ],
      'password':[
        { type: 'required', message: 'Password is required.'},
        { type: 'minlength', message: 'min length is 5.'},
        { type: 'pattern', message: 'upperCase, lowercase and numbers.'}
      ]
    };
  constructor(public formBuilder: FormBuilder) { 

    this.RegisterForm = formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      phoneNumber: new FormControl(''),
      streetDetails: new FormControl(''),
      building: new FormControl(''),
      apartment: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      specialMarque: new FormControl('')
    });

  }

  ngOnInit() {
  }

  register(){
    console.log(this.RegisterForm.value)
  }

}
