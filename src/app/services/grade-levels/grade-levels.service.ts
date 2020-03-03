import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './../env/env.service';

@Injectable({
  providedIn: 'root'
})
export class GradeLevelsService {

  constructor(
    private http: HttpClient,
    private env: EnvService
    ) { }

  getGradeLevels(): Observable<any>{
    return this.http.get(this.env.API_URL+'/api/grade/levels');
  }

  getGrades(id): Observable<any>{
    return this.http.get(this.env.API_URL+'/api/grade/level/'+id);
  }

  getGradeProducts(id): Observable<any>{
    return this.http.get(this.env.API_URL+'/api/grade/'+id+'/products');
  }
}
