import { Component, OnInit } from '@angular/core';
import { RequestDataService } from '../services/request-data/request-data.service';
import { CategoryService } from '../services/category/category.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.page.html',
  styleUrls: ['./category-products.page.scss'],
})
export class CategoryProductsPage implements OnInit {
  category;
  Products;
  constructor(private rds: RequestDataService, private cs: CategoryService) {
  }

  ngOnInit() {
    this.getCategory()
    this.getCategoryProduct()
  }

  getCategoryProduct(){
    this.cs.getCategoryProducts(this.category.id).subscribe(products => this.Products = products);
  }

  getCategory(): void{
    this.category = this.rds.getRequestData()
  }

  getSelectedProduct(product): void{
    this.rds.setRequestData(product);
  }
}
