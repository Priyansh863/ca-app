import { Component, OnInit } from '@angular/core';
import {FriendService} from 'src/app/services/basics/friend.service'
import {NotificationsService} from 'angular2-notifications'


@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  data_friend=[]
  request_data=[]
  p_id
  len1
  len2

  constructor(private service:FriendService,
    private notification:NotificationsService) { }

  ngOnInit(): void {
    this.service.onfriend().subscribe(data=>{
      this.data_friend=data
      this.len1=Object.keys(data).length


    })


    this.service.onrequest().subscribe(data=>{
      this.request_data=data
      //alert(data)
      this.len2=Object.keys(data).length

      //console.log(data,'since-------------------------')

    })



  }
  url="http://127.0.0.1:8000"
  imageurl: string="/assets/img/4.jpg"




  onaccept(id){
  

    this.service.onacceptfriend(id).subscribe(data=>{
      if(data.status==200){
        this.notification.success('accepted', 'Click to undo...', {
          timeOut: 10000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
          
      
          
      
        })

      
      //alert(data)
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
  

onunfriend(id,name){
  this.service.ondeletefriend(id).subscribe(data=>{
    let r="Unfriend" + String(name)
    if(data.status=="delete")
    this.notification.success(r, 'Click to undo...', {
      timeOut: 10000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
      
  
      
  
    })

  })
}


}
