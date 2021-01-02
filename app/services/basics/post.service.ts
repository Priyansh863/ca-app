import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  onpost():Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/app/post_view/')
  }
  onuserpost():Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/app/Post_get_by_user/')
  }
  onget(data):Observable<any>{
    const endpoint="http://127.0.0.1:8000/media/media/img/"
    const formdata:FormData=new FormData();
    




    return this.http.post<any>('http://127.0.0.1:8000/app/post_content_create/',data)
  }
  

  onlike(data){
    return this.http.post<any>('http://127.0.0.1:8000/app/Like_views/',data)

  }


  onlikedata(){
    return this.http.get<any>('http://127.0.0.1:8000/app/like_check/')


  }


  onlike_check(data){
    return this.http.post<any>('http://127.0.0.1:8000/app/like_check/',data)

  }
  oncomment(id):Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/app/Comment_by_post/'+id+'/')
  }
  oncomment_add(data):Observable<any>{
    return this.http.post<any>('http://127.0.0.1:8000/app/Comment_views/',data)
  }

  
  onunlike(data){
    return this.http.post<any>('http://127.0.0.1:8000/app/DisLike_views/',data)

  

  }
  onunlikedata():Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/app/DisLike_views/')


  }
  onpostid(id){
    return this.http.get<any>('http://127.0.0.1:8000/app/Post_get_by_user/'+id+'/')


    
  }

  onposttag(id){
    return this.http.get<any>('http://127.0.0.1:8000/app/post_get_by_title/'+id+'/')


    
  }
}
