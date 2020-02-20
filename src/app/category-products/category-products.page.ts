import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryProductsService } from './../services/category_products/category-products.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.page.html',
  styleUrls: ['./category-products.page.scss'],
})
export class CategoryProductsPage implements OnInit {
  id: number;
  CategoryName: string;
  Products;
  constructor(private route: ActivatedRoute, private cps: CategoryProductsService) {
    this.id = this.route.snapshot.params['id'];
    this.CategoryName = this.route.snapshot.params['name'];
   }

  ngOnInit() {
  }

  getCategoryProduct(){
    this.cps.getCategoryProducts(this.id).subscribe(products => this.Products = products);
  }

}
