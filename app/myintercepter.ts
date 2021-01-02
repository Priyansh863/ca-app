import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse} from '@angular/common/http/'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyIntercepter implements HttpInterceptor {
  p
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
      this.p='Token '+sessionStorage.getItem('token')
      //alert(this.p)

        let request=req.clone(
            {
                headers: new HttpHeaders().append('Authorization',this.p),
            }
        );

        return next.handle(request)
    }


  //token: string="afe2bee149ae29fbffe2bfd03cf26b6f8bc1c262"

  constructor() { }
}
