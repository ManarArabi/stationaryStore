import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'http://192.168.1.125:8081/stationery_store_api_war'
  constructor(private http: HttpClient) { }
  getCategories():Observable<any>{
    return this.http.get(this.url+'/api/category?limit=6');
  }

  getCategoryProducts(id):Observable<any>{
    return this.http.get(this.url+'/api/category/'+id+'/products')
  }
}
