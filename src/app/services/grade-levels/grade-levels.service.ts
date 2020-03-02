import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GradeLevelsService {
  url = 'http://192.168.1.2:8081/stationery_store_api_war'
  constructor(private http: HttpClient) { }

  getGradeLevels(): Observable<any>{
    return this.http.get(this.url+'/api/grade/levels');
  }

  getGrades(id): Observable<any>{
    return this.http.get(this.url+'/api/grade/level/'+id);
  }

  getGradeProducts(id): Observable<any>{
    return this.http.get(this.url+'/api/grade/'+id+'/products');
  }
}
