import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterationPageRoutingModule } from './registeration-routing.module';

import { RegisterationPage } from './registeration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterationPageRoutingModule
  ],
  declarations: [RegisterationPage]
})
export class RegisterationPageModule {}
