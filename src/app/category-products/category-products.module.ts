import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryProductsPageRoutingModule } from './category-products-routing.module';

import { CategoryProductsPage } from './category-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryProductsPageRoutingModule
  ],
  declarations: [CategoryProductsPage]
})
export class CategoryProductsPageModule {}
