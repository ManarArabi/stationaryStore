import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'http://192.168.1.2:8081/stationery_store_api_war'
  constructor(private http: HttpClient) { }
  getCategories(pageNo = 1, pageSize = 6):Observable<any>{
    return this.http.get(this.url+'/api/category?limit='+pageSize+'&pageNumber='+pageNo);
  }

  getCategoryProducts(id):Observable<any>{
    return this.http.get(this.url+'/api/category/'+id+'/products')
  }

  getTotalNumberOfCategories():Observable<any>{
    return this.http.get(this.url+'/api/category/count')
  }
}
