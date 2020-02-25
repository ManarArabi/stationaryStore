import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradeLevelsPage } from './grade-levels.page';

const routes: Routes = [
  {
    path: '',
    component: GradeLevelsPage,
    children: [
      {
        path: 'packages',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../packages/packages.module').then(m => m.PackagesPageModule)
          }
        ]
      },{
        path: '',
        redirectTo: '/grade-levels/packages',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradeLevelsPageRoutingModule {}
