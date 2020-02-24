import { Component, OnInit } from '@angular/core';
import { RequestDataService } from '../services/request-data/request-data.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.page.html',
  styleUrls: ['./packages.page.scss'],
})
export class PackagesPage implements OnInit {
  Level;
  constructor(private rds: RequestDataService) { }

  ngOnInit() {
    this.getLevel()
    console.log(this.Level)
  }

  getLevel(){
    this.Level = this.rds.getRequestData()
  }
}
