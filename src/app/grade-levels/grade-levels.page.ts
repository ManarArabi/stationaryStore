import { Component, OnInit } from '@angular/core';
import { RequestDataService } from '../services/request-data/request-data.service';
import { GradeLevelsService } from '../services/grade-levels/grade-levels.service';
@Component({
  selector: 'app-grade-levels',
  templateUrl: './grade-levels.page.html',
  styleUrls: ['./grade-levels.page.scss'],
})
export class GradeLevelsPage implements OnInit {
  Level;
  Grades;
  SelectedGrade = null ;
  constructor(
    private rds: RequestDataService,
    private gls: GradeLevelsService
    ) { }

  ngOnInit() {
    this.getLevel()
    this.getGrades(this.Level.id)
  }

  getLevel(){
    this.Level = this.rds.getRequestData()
  }

  getGrades(id){
    this.gls.getGrades(id).subscribe(grades=> this.Grades = grades)
  }

  GetSelectedGrade(grade){
    this.SelectedGrade = grade;
  }

}
