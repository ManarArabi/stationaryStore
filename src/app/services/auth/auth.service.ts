import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './../env/env.service';
import { User } from '../../types/UserPayLoad';
import { UserCredentail } from '../../types/UserCredential';
import { UserService } from './../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  token:any;

  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService,
    private userService: UserService
  ) { }

  login(user: UserCredentail): any {
    let loggedInUser = this.userService.findUser(user)
    if(loggedInUser != null){
      this.token = 'hjkdfhdkjfskdjfh';
      this.isLoggedIn = true;
      this.env.CURRENT_USER = loggedInUser;
      return loggedInUser;
    }
    return null
  }

  register(user: User) {
    let registeredUser = this.userService.addUser(user);
    if(registeredUser != null){
      this.token = 'ijkfjdkfjdfkdj';
      this.isLoggedIn = true;
      this.env.CURRENT_USER = user
      return user
    }else{
      return null
    }
  }

  logout() {
    this.token = '';
    this.isLoggedIn = false;
    this.env.CURRENT_USER = null
  }
  
}
