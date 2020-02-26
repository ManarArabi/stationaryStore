import { Component, OnInit } from '@angular/core';
import { RequestDataService } from '../services/request-data/request-data.service';
import { GradeLevelsService } from '../services/grade-levels/grade-levels.service';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-grade-levels',
  templateUrl: './grade-levels.page.html',
  styleUrls: ['./grade-levels.page.scss'],
})
export class GradeLevelsPage implements OnInit {
  Level;
  Grades;
  SelectedGrade = null ;
  Products;
  TotalPrice;
  constructor(
    private rds: RequestDataService,
    private gls: GradeLevelsService,
    private ps: ProductService
    ) { }

  ngOnInit() {
    this.getLevel()
    this.getGrades(this.Level.id)
  }

  getLevel(){
    this.Level = this.rds.getRequestData()
  }

  getGrades(id){
    this.gls.getGrades(id).subscribe(grades=> this.Grades = grades)
  }

  GetSelectedGrade(grade){
    this.SelectedGrade = grade;
    this.getProducts(this.SelectedGrade.gradeId);
  }

  getProducts(id){
    this.gls.getGradeProducts(id).subscribe((products) => {
      this.Products = products;
      this.calculateTotalPrice(this.Products);
    })
  }

  calculateTotalPrice(products){
    this.TotalPrice = 0 ;
    products.forEach(p => {
      p.price = this.ps.calculatePrice(p);
      this.TotalPrice += (p.price * p.classifiedProduct.quantity);
    });
    this.TotalPrice = this.TotalPrice.toPrecision(4);
  }
}
