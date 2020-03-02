import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

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
  constructor(public formBuilder: FormBuilder) {

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

}
