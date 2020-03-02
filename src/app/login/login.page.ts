import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { UserCredentail } from '../types/UserCredential';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public LoginForm: FormGroup;
  validation_messages = {
      'email':[
        { type: 'required', message: 'Email is required.' },
        { type: 'pattern', message: 'ex: example@example.com'}
      ],
      'password':[
        { type: 'required', message: 'Password is required.'}
      ]
    };
    User: UserCredentail = {
      email: '',
      password:''
    };
  constructor(
    public formBuilder: FormBuilder, 
    public us: UserService,
    private router: Router
    ) {

    this.LoginForm = formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

  }
   

  ngOnInit() {
  }

  login(){
    this.User.email = this.LoginForm.value.email
    this.User.password = this.LoginForm.value.password
    // this.us.login(this.User)
    this.router.navigateByUrl('/home');
  }
}
