import { Injectable } from '@angular/core';
import { CategoryProducts } from '../../mocks/category_products';
import { CategoryProduct } from '../../types/category-product';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryProductsService {

  constructor() { }

  getCategoryProducts(id: number):Observable<CategoryProduct[]>{
    return of(CategoryProducts);
  }
}
