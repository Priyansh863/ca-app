import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {FriendService} from 'src/app/services/basics/friend.service'
import {NotificationsService} from 'angular2-notifications'

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(
    private service:FriendService,private notification:NotificationsService,private route:Router) { }
  imageurl: string="/assets/img/3.png"
  request_data=[]
  url="http://127.0.0.1:8000"
  r=0


 
  ngOnInit(): void {
    this.service.onfriend_recommend().subscribe(data=>{
      alert("oooo")
      if(data=="0"){

        this.r=1
        console.log(data,'=====================12345t6y7u')

       
      }
      else{

     
      this.request_data=data
      console.log(this.request_data,'=====================12345t6y7u')
      }
      
      

    })
  }

}
