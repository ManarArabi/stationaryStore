import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  Categories;
  constructor(private cs: CategoryService, private router: Router) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories():void{
    this.cs.getCategories().subscribe(categories => this.Categories = categories);
  }

  navToCategoryProducts(id):void{
    this.router.navigate(['/category-products', id]);
  }
}
