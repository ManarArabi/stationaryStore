import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { User } from '../types/UserPayLoad';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public ProfileForm: FormGroup;
  User: User = {
    firstName: 'Natacha',
    lastName: 'Rominoff',
    email: 'Rominoff@c.com',
    password:'******',
    phoneNumber: '01120000000',
    phoneNumber2: '',
    type: '',
    addresses: [
      {
        apartment: 0,
        building: 5,
        city:'New York',
        state: 'US',
        specialMarque: '',
        streetDetails: 'sdsda'
      }
    ]
  };
  constructor(
    public formBuilder: FormBuilder,
    private router: Router
    ) { 
    this.ProfileForm = formBuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      phoneNumber: new FormControl(''),
      phoneNumber2: new FormControl(''),
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

  edit(){
    this.User.firstName = this.ProfileForm.value.firstName
    this.User.lastName = this.ProfileForm.value.lastName
    this.User.email = this.ProfileForm.value.email
    this.User.password = this.ProfileForm.value.password
    this.User.addresses[0].streetDetails = this.ProfileForm.value.streetDetails
    this.User.addresses[0].building = this.ProfileForm.value.building
    this.User.addresses[0].apartment = this.ProfileForm.value.apartment
    this.User.addresses[0].city = this.ProfileForm.value.city
    this.User.addresses[0].state = this.ProfileForm.value.state
    this.User.addresses[0].specialMarque = this.ProfileForm.value.specialMarque
    this.User.phoneNumber = this.ProfileForm.value.phoneNumber
    this.User.phoneNumber2 = this.ProfileForm.value.phoneNumber2
    console.log(this.User);
    // this.us.editProfile(this.User); //waiting for api
    this.router.navigateByUrl('/profile');
  }

}
