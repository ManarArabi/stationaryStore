import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  url = 'http://192.168.1.125:8081/stationery_store_api_war'
  constructor(private http: HttpClient) { }

  getOffers():Observable<any>{
    return this.http.get(this.url+'/api/offer?limit=6');
  }
}
