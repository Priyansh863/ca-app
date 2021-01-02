import { Injectable } from '@angular/core';
import { CanActivate, Router,} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate():boolean{
    if(sessionStorage.getItem("token")){
      return true
    }
    else{
      this.route.navigate(['/'])

    }
  }
  
}
