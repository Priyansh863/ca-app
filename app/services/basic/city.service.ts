import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient ) { }

  oncity():Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/app/city/')
  }
  onstate():Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/app/state/')
  }
  ontechnical(){
    return this.http.get<any>('http://127.0.0.1:8000/app/technical/')}

    on_non_technical(){
      return this.http.get<any>('http://127.0.0.1:8000/app/nontechnical/')
  
    }
    on_institute(){
      return this.http.get<any>('http://127.0.0.1:8000/app/institute_get/')
  
    }
    
  
  }

