import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';
import { RequestDataService } from '../services/request-data/request-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  CategoriesData;
  NumberOfCategories;

  constructor(private cs: CategoryService, private rds: RequestDataService) { 
    this.getNumberOfCategories();
    this.getCategories();
  }

  ngOnInit() {
  }

  getCategories(pageNo = 1, pageSize = 6):void{
    this.cs.getCategories(pageNo, pageSize).subscribe(categories => this.CategoriesData = categories);
  }

  getSelectedCategory(category):void{
    this.rds.setRequestData(category);
  }

  getNumberOfCategories():void{
    this.cs.getTotalNumberOfCategories().subscribe(data => this.NumberOfCategories = data.count);
  }
}
