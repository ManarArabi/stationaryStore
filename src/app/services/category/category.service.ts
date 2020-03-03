import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './../env/env.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(
    private http: HttpClient,
    private env: EnvService
    ) { }
  getCategories(pageNo = 1, pageSize = 6):Observable<any>{
    return this.http.get(this.env.API_URL+'/api/category?limit='+pageSize+'&pageNumber='+pageNo);
  }

  getCategoryProducts(pageNo = 1, pageSize= 6, id):Observable<any>{
    return this.http.get(this.env.API_URL+'/api/category/'+id+'/products?limit='+pageSize+'&pageNumber='+pageNo)
  }
  
}
