import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterationPage } from './registeration.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterationPageRoutingModule {}
