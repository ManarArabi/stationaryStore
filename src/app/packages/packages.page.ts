import { Component, OnInit } from '@angular/core';
import { RequestDataService } from '../services/request-data/request-data.service';
import { GradeLevelsService } from '../services/grade-levels/grade-levels.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.page.html',
  styleUrls: ['./packages.page.scss'],
})
export class PackagesPage implements OnInit {
  Level;
  Grades;
  Package;
  constructor(
    private rds: RequestDataService,
    private gls: GradeLevelsService
    ) { }

  ngOnInit() {
    this.getLevel()
    this.getGrades(this.Level.id)
    this.getPackage(1)
  }

  getLevel(){
    this.Level = this.rds.getRequestData()
  }

  getGrades(id){
    this.gls.getGrades(id).subscribe(grades=> this.Grades = grades)
  }

  getPackage(id){
    this.gls.getGradeProducts(id).subscribe((Products)=> {this.Package = Products; console.log(Products)})
  }
}
