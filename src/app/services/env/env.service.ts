import { Injectable } from '@angular/core';
import { User } from '../../types/UserPayLoad';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://192.168.1.18:8081/stationery_store_api_war';
  CURRENT_USER: User;
  constructor() { }

  setCurrentUser(user: User){
    this.CURRENT_USER = user
  }
  
}
