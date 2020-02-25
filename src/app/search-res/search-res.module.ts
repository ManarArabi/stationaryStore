import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchResPageRoutingModule } from './search-res-routing.module';

import { SearchResPage } from './search-res.page';
import { ComponentsModule } from './../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchResPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SearchResPage]
})
export class SearchResPageModule {}
