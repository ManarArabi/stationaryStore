import { Injectable } from '@angular/core';
import { BestSeller } from '../mocks/bestSeller';
import { Product } from '../bestSeller';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { 
    
  }

  getBestSeller():Observable<Product[]>{
    return of(BestSeller);
  }
}
