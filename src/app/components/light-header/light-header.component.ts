import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-light-header',
  templateUrl: './light-header.component.html',
  styleUrls: ['./light-header.component.scss'],
})
export class LightHeaderComponent implements OnInit {

  constructor(
    private navController: NavController,
    private authService: AuthService
    ) { }

  ngOnInit() {}

  navigateToRegister(){
    this.navController.navigateForward('/registeration')
  }

  navigateToProfile(){
    this.navController.navigateForward('/profile')
  } 
}
