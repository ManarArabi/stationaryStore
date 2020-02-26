import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.page.html',
  styleUrls: ['./registeration.page.scss'],
})
export class RegisterationPage implements OnInit {
  FirstName: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.FirstName)
  }

}
