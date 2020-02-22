import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';
import { RequestDataService } from '../services/request-data/request-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  Categories;
  constructor(private cs: CategoryService, private rds: RequestDataService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories():void{
    this.cs.getCategories().subscribe(categories => this.Categories = categories);
  }

  getSelectedCategory(category):void{
    this.rds.setRequestData(category);
  }
}
