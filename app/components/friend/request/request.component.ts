import { Component, OnInit } from '@angular/core';
import {FriendService} from 'src/app/services/basics/friend.service'
import {NotificationsService} from 'angular2-notifications'
import {Router} from  '@angular/router'



@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  request_data=[]
  url="http://127.0.0.1:8000"
  p_id
  d_id

  constructor(
private service:FriendService,private notification:NotificationsService,private route:Router


  ) { }

  ngOnInit(): void {
    this.service.onrequest().subscribe(data=>{
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
onaccept(id){
  

  this.service.onacceptfriend(id).subscribe(data=>{
    if(data.status==200){
      


      this.notification.success("Accepted", 'Click to undo...', {
        timeOut: 10000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true,
        
    
        
    
      })
      this.p_id=id





    }
    else{
      this.notification.error(data, 'Click to undo...', {
        timeOut: 10000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true,
        
    
        
    
      })

    }
  })
}
ondelete(id){
  this.service.ondeletefriend(id).subscribe(data=>{
    if(data.status==200){
      


      this.notification.success("Done", 'Click to undo...', {
        timeOut: 10000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true,
        
    
        
    
      })
      this.d_id=id





    }
    else{
      this.notification.error(data, 'Click to undo...', {
        timeOut: 10000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true,
        
    
        
    
      })

    }
  })

}

}
