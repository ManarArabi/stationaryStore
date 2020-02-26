import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-light-header',
  templateUrl: './light-header.component.html',
  styleUrls: ['./light-header.component.scss'],
})
export class LightHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToRegister(){
    this.router.navigateByUrl('/registeration')
  }
}
