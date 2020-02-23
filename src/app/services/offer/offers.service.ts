import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  url = 'http://192.168.1.125:8081/stationery_store_api_war'
  x ;
  constructor(private http: HttpClient) { }

  getOffers():Observable<any>{
    // const headers = new Headers({
    //   'Content-Type': 'application/json; charset=utf-8',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    //   'Accept':'application/json'
    // });
    return this.http.get(this.url+'/api/offer?limit=6');

  }
}
