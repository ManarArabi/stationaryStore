import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradeLevelsPageRoutingModule } from './grade-levels-routing.module';

import { GradeLevelsPage } from './grade-levels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GradeLevelsPageRoutingModule
  ],
  declarations: [GradeLevelsPage]
})
export class GradeLevelsPageModule {}
