import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = 'http://192.168.1.2:8081/stationery_store_api_war'

  constructor(private http: HttpClient) { }
  
  search(keyWord):Observable<any>{
    return this.http.get(this.url+'/api/search?limit=3&keyWord='+keyWord);
  }
}
