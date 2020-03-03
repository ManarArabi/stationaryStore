import { Component, OnInit } from '@angular/core';
import { User } from '../types/UserPayLoad';
import { EnvService } from '../services/env/env.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  User: User ;
  constructor(
    private env: EnvService
    ) { 
    this.User = this.env.CURRENT_USER
  }

  ngOnInit() {
  }

}
