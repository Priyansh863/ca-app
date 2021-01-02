import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupClientService {

  constructor(private http: HttpClient) { }
  onsignup(data):Observable<any>{
    return this.http.post<any>('http://127.0.0.1:8000/app/Client_views/',data)
  }
  onget(id):Observable<any>{
   // alert("hhhh")
    //alert(id)
    //alert('comeee')
    return this.http.get<any>('http://127.0.0.1:8000/app/client_update/'+id+'/')
  }
  onuserdata(){
    return this.http.get<any>("http://127.0.0.1:8000/app/client_get/")

  }
  onimage(id,data){
    alert(data)
    console.log(data,'imageeeeeeeeeeeeeeeeeeeeeeeee')
    return this.http.patch('http://127.0.0.1:8000/app/client_update/'+id+'/',data)

    
  }

}
