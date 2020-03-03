import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvService } from './../env/env.service';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(
    private http: HttpClient,
    private env: EnvService
    ) { }

  getOffers(pageNo= 1, pageSize=6):Observable<any>{
    return this.http.get(this.env.API_URL+'/api/offer?limit='+pageSize+'&pageNumber='+pageNo);
  }
}
