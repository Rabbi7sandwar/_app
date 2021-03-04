import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( private http: HttpClient) { }

  public getdata(){
    let apiurl="https://api.mocki.io/v1/b043df5a";
    return this.http.get(apiurl);
  }
}
