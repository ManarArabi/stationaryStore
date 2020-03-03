import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvService } from './../env/env.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient,
    private env: EnvService
    ) { }
  
  search(keyWord):Observable<any>{
    return this.http.get(this.env.API_URL+'/api/search?limit=3&keyWord='+keyWord);
  }
}
