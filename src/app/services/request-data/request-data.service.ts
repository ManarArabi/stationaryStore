import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestDataService {
  RequestData;
  constructor() { }

  setRequestData(data: any):void{
    this.RequestData = data;
  }

  getRequestData(): any{
    return this.RequestData;
  }
}
