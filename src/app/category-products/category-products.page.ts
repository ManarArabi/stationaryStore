import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.page.html',
  styleUrls: ['./category-products.page.scss'],
})
export class CategoryProductsPage implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit() {
  }

}
