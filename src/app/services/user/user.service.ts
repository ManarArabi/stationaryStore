import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { User } from '../../types/UserPayLoad';
import { CurrentUser } from '../../types/User';
import { retry, catchError } from 'rxjs/operators';
import { UserCredentail } from '../../types/UserCredential';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://192.168.1.2:8081/stationery_store_api_war';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  register(User: User){
    return this.http
      .post<CurrentUser>(this.url, JSON.stringify(User), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  login(User: UserCredentail){
    return this.http
      .post<CurrentUser>(this.url, JSON.stringify(User), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}

