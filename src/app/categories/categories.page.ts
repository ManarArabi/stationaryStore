import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  Categories;
  constructor(private cs: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories():void{
    this.cs.getCategories().subscribe(categories => this.Categories = categories);
  }
}
