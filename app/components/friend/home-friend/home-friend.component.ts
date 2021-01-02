import { Component, OnInit } from '@angular/core';
import {FriendService} from 'src/app/services/basics/friend.service'
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import {LogoutComponent} from 'src/app/logout/logout.component'
import {NotificationsService} from 'angular2-notifications'
import {Router} from  '@angular/router'

import { from } from 'rxjs';
@Component({
  selector: 'app-home-friend',
  templateUrl: './home-friend.component.html',
  styleUrls: ['./home-friend.component.css']
})
export class HomeFriendComponent implements OnInit {
  friend_list=[]
  url="http://127.0.0.1:8000"


  constructor(private service:FriendService,private dialog:MatDialog,private notification:NotificationsService,private route:Router) { }

  ngOnInit(): void {
    this.service.onfriend().subscribe(data=>{

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
        this.friend_list=data

      }
      
    })
  }
  u_id=localStorage.getItem("id")
  imageurl: string="/assets/img/4.jpg"

logout(){
  this.dialog.open(LogoutComponent,{
    width:"390px",
    panelClass:"confirm-dialog-container",
    disableClose:true
  })
}


}
