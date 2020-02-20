import { Injectable } from '@angular/core';
import { Categories } from '../../mocks/categories';
import { Category } from '../../types/category';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getCategories():Observable<Category[]>{
    return of(Categories);
  }
}
