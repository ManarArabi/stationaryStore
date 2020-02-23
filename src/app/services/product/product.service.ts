import { Injectable } from '@angular/core';
import { BestSeller } from '../../mocks/bestSeller';
import { Product } from '../../types/bestSeller';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://192.168.1.125:8081/stationery_store_api_war';
  constructor(private http: HttpClient) {
  }

  getBestSeller():Observable<any>{
    return this.http.get(this.url+'/api/product/bestseller?limit=6');
  }
}
