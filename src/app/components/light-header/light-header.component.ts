import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-light-header',
  templateUrl: './light-header.component.html',
  styleUrls: ['./light-header.component.scss'],
})
export class LightHeaderComponent implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {}

  navigateToRegister(){
    this.navController.navigateForward('/registeration')
  }
}
