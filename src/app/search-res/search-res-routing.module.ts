import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchResPage } from './search-res.page';

const routes: Routes = [
  {
    path: '',
    component: SearchResPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchResPageRoutingModule {}
