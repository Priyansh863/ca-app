import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FriendService {
  value=''

  constructor(private http: HttpClient) { }
  onrequest():Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/app/friendrequestgetbyTouser/')
    
    

  }
  
  onfromrequest(){
    return this.http.get<any>('http://127.0.0.1:8000/app/friendrequestgetbyFromser/')

    
  }
  onfromrequestcancle(id){

  
  return this.http.patch<any>("http://127.0.0.1:8000/app/friendrequestgetbyFromser/"+id+'/',{"Status":0})
  }

  onfriend(){
    return this.http.get<any>('http://127.0.0.1:8000/app/friend_List/')
    
  }
  onget(data){
    this.value=data
    

  }
  onpost(){
    
    return this.value
  }
  onsearchuser(data){
    return this.http.get<any>('http://127.0.0.1:8000/app/Search_user/?name='+data+'&ordering=CreatedDate')
    
  }
  onnotification(){
    return this.http.get<any>("http://127.0.0.1:8000/app/Notification_by_user/")

  }
  onnotificationend(id){
    return this.http.patch<any>("http://127.0.0.1:8000/app/Notification_by_user/"+id+'/',{"status":1})

  }

onacceptfriend(id){
  return this.http.patch<any>("http://127.0.0.1:8000/app/friendrequest_update/"+id+'/',{"Status":1})
  
}
ondeletefriend(id){
  return this.http.patch<any>("http://127.0.0.1:8000/app/friendrequest_update/"+id+'/',{"Status":0})
  
}
onsendrequest(id){
  return this.http.post<any>("http://127.0.0.1:8000/app/Friend_request/",{"ToUser":id})

}

onfriendcheck(id){
  return this.http.post<any>("  http://127.0.0.1:8000/app/friend_check_serializer/",{"FromUser":id})
}
onfrienddata(){
  return this.http.get<any>("http://127.0.0.1:8000/app/Friend_request/")

  
}

onfollow(id){
  return this.http.post<any>("http://127.0.0.1:8000/app/follower_view/",{"Followers":id})
}
onfollowdata(){
  return this.http.get<any>("http://127.0.0.1:8000/app/follower_view/")
}
onunfollow(id){
  return this.http.get<any>("http://127.0.0.1:8000/app/follower_view/"+id+'/')


}

handelError(err){
  if(err instanceof HttpErrorResponse)
  return throwError(err.message)
  console.log(err.message)
}

onfriend_recommend(){
  return this.http.get<any>("http://127.0.0.1:8000/app/friend_reccomendation/")
  alert("hiiiii")


}

}
