import { Component, OnInit } from '@angular/core';
import { RequestDataService } from '../services/request-data/request-data.service';
import { GradeLevelsService } from '../services/grade-levels/grade-levels.service';
// import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-packages',
  templateUrl: './packages.page.html',
  styleUrls: ['./packages.page.scss'],
})
export class PackagesPage implements OnInit {
  Grade
  Package;
  constructor(
    private rds: RequestDataService,
    private gls: GradeLevelsService,
    // private route: ActivatedRoute,
    // private router: Router
    ) { 
      // console.log(this.route.snapshot.paramMap.get('id'))
    }

  ngOnInit() {
    this.getGrade()
    console.log(this.Grade)
    // this.getPackage(this.Grade.gradeId)
  }

  getGrade(){
    this.Grade = this.rds.getRequestData();
  }

  getPackage(id){
    this.gls.getGradeProducts(id).subscribe((Products)=> {this.Package = Products; console.log(Products)})
  }
}
