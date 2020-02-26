import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradeLevelsPage } from './grade-levels.page';

const routes: Routes = [
  {
    path: '',
    component: GradeLevelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradeLevelsPageRoutingModule {}
