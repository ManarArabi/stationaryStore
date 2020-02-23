import { Component, OnInit } from '@angular/core';
import { GradeLevelsService } from './../../services/grade-levels/grade-levels.service';

@Component({
  selector: 'app-grade-levels',
  templateUrl: './grade-levels.component.html',
  styleUrls: ['./grade-levels.component.scss'],
})
export class GradeLevelsComponent implements OnInit {
  GradeLevels;
  constructor(private gls: GradeLevelsService) { }

  ngOnInit() {
    this.getGradeLevels();
  }

  getGradeLevels():void{
    this.gls.getGradeLevels().subscribe(gradeLevels => this.GradeLevels = gradeLevels);
  }
}
