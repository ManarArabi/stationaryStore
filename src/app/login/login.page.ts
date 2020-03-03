import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { UserCredentail } from '../types/UserCredential';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { AlertService } from '../services/alert/alert.service';

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
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
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
    let loggedInUser = this.authService.login(this.User)
    if(loggedInUser != null){
      this.alertService.presentToast("Logged In");
      this.router.navigateByUrl('/home');
    }else{
      this.alertService.presentToast("User Not Found");
    }    
  }
}
