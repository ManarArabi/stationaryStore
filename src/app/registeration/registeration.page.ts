import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { User } from '../types/UserPayLoad';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.page.html',
  styleUrls: ['./registeration.page.scss'],
})
export class RegisterationPage implements OnInit {
  public RegisterForm: FormGroup;
  User: User = {
    firstName: '',
    lastName: '',
    email: '',
    password:'',
    phoneNumber: '',
    phoneNumber2: '',
    type: '',
    addresses: [
      {
        apartment: 0,
        building: 0,
        city:'',
        state: '',
        specialMarque: '',
        streetDetails: ''
      }
    ]
  };
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
  constructor(
    public formBuilder: FormBuilder,
    public us: UserService
    ) { 

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
    this.User.firstName = this.RegisterForm.value.firstName
    this.User.lastName = this.RegisterForm.value.lastName
    this.User.email = this.RegisterForm.value.email
    this.User.password = this.RegisterForm.value.password
    this.User.addresses[0].streetDetails = this.RegisterForm.value.streetDetails
    this.User.addresses[0].building = this.RegisterForm.value.building
    this.User.addresses[0].apartment = this.RegisterForm.value.apartment
    this.User.addresses[0].city = this.RegisterForm.value.city
    this.User.addresses[0].state = this.RegisterForm.value.state
    this.User.addresses[0].specialMarque = this.RegisterForm.value.specialMarque
    // this.us.register(this.User); //waiting for api
  }

}
