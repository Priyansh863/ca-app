import { Component, OnInit } from '@angular/core';
import {FriendService} from 'src/app/services/basics/friend.service'
import {MatDialogRef } from '@angular/material/dialog';
import {NotificationsService} from 'angular2-notifications'


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notification_data=[]
  url="http://127.0.0.1:8000"
  imageurls="/assets/img/4.jpg"

  constructor(private service:FriendService,private dialog:MatDialogRef<NotificationComponent>,private notification:NotificationsService) { }

  ngOnInit(): void {
    
    this.service.onnotification().subscribe(data=>{
      this.notification_data=data
     // alert(data)
     // console.log(data,'commenttttttttttt')

    })
    
  }

  onclose(){
    //alert(localStorage.getItem('id'))
    this.service.onnotificationend(localStorage.getItem('id')).subscribe(data=>{
     // alert(data)
     if(data.status==200){
      this.dialog.close()

       
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
