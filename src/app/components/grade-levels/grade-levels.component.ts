import { Component, OnInit } from '@angular/core';
import { GradeLevelsService } from './../../services/grade-levels/grade-levels.service';
import { RequestDataService } from '../../services/request-data/request-data.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-grade-levels',
  templateUrl: './grade-levels.component.html',
  styleUrls: ['./grade-levels.component.scss'],
})
export class GradeLevelsComponent implements OnInit {
  GradeLevels;
  constructor(
    private gls: GradeLevelsService, 
    private rds: RequestDataService,
    private router: Router,
    public popoverCtrl: PopoverController
    ) { }

  ngOnInit() {
    this.getGradeLevels();
  }

  getGradeLevels():void{
    this.gls.getGradeLevels().subscribe(gradeLevels => this.GradeLevels = gradeLevels);
  }

  getSelectedLevel(level):void{
    this.rds.setRequestData(level)
    this.popoverCtrl.dismiss()
    this.navigateToPackagePage()
  }

  navigateToPackagePage(){
    this.router.navigateByUrl('/packages');
  }

}
