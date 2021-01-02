import { Component, OnInit } from '@angular/core';
import {FriendService} from 'src/app/services/basics/friend.service'
import {NotificationsService} from 'angular2-notifications'
import {Router} from  '@angular/router'



@Component({
  selector: 'app-sent-request',
  templateUrl: './sent-request.component.html',
  styleUrls: ['./sent-request.component.css']
})
export class SentRequestComponent implements OnInit {
  request_data=[]
  url="http://127.0.0.1:8000"
  p_id
  d_id


  constructor(private service:FriendService,private notification:NotificationsService,private route:Router) { }

  ngOnInit(): void {
    this.service.onfromrequest().subscribe(data=>{
      if(data.status==404){
        this.notification.error("user not present ", 'Click to undo...', {
          timeOut: 10000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
          
      
          
      
        })
        localStorage.removeItem("id")
        sessionStorage.removeItem("token")
        this.route.navigate(['/'])
      }
      else{

     
      this.request_data=data
      }
      
    })
  }
  imageurl: string="/assets/img/4.jpg"
  oncancle(id){
  

    this.service.onfromrequestcancle(id).subscribe(data=>{
      alert(data.status)
      if(data.status==200)
      alert("cancle request")
    })
  }
  }


