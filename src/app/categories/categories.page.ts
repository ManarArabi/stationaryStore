import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../services/category/category.service';
import { RequestDataService } from '../services/request-data/request-data.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  CategoriesData = new Array();
  NumberOfCategories;
  PageNo = 1;
  PageSize = 8;
  constructor(private cs: CategoryService, private rds: RequestDataService) { 
    this.getNumberOfCategories();
    this.getCategories(this.PageNo, this.PageSize);
  }

  ngOnInit() {
  }

  getCategories(pageNo = 1, pageSize = 6):void{
    this.cs.getCategories(pageNo, pageSize).subscribe(categories => this.CategoriesData= this.CategoriesData.concat(categories));
  }

  getSelectedCategory(category):void{
    this.rds.setRequestData(category);
  }

  getNumberOfCategories():void{
    this.cs.getTotalNumberOfCategories().subscribe(data => this.NumberOfCategories = data.count);
  }

  loadData(event) {
    setTimeout(() => {
      this.PageNo += 1;
      this.getCategories(this.PageNo, this.PageSize)
      console.log('Done');
      event.target.complete();
      if (this.CategoriesData.length == 100) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
