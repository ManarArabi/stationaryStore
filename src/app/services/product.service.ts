import { Injectable } from '@angular/core';
import { BestSeller } from '../mocks/bestSeller';
import { Product } from '../types/bestSeller';
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
