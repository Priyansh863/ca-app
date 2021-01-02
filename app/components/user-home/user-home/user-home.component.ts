import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router'
import {FormsModule,FormControl, FormGroup,Validators,} from '@angular/forms';
import {FriendService} from 'src/app/services/basics/friend.service'
import {PostService} from 'src/app/services/basics/post.service'
import {SignupClientService} from 'src/app/services/basics/signup-client.service'

import {Like} from 'src/app/components/basics/home/Like'
import {UnLike} from 'src/app/components/basics/home/unlike'
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import {NotificationsService} from 'angular2-notifications'
import {Follow} from 'src/app/components/user/follow'

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  id
  o=0
  imageurl
  imageurl1
  data_user:[];
  post_data:[]
  comment:[]
  data2:UnLike[]
f_data:Follow[]
  data1:Like[]
  user_data=[]
  name1
  age
  birth
  technical
  email1
  nontechnical
  institute
  city
  id1
  id3



  img1:String
  name
  email
  url="http://127.0.0.1:8000"
  imageurls="/assets/img/4.jpg"


  constructor(private route:ActivatedRoute,
    private service:SignupClientService,
    private router: Router,
    private postservice:PostService,
    private friendservice:FriendService,
    private notification:NotificationsService) { }

  
    forms=new FormGroup(
      {
        Post_comment : new FormControl('',[
          Validators.required,
        ]
        )
      }
    )

    get Post_comment(){
      return this.forms.get('Post_comment')
    }
      





  ngOnInit(): void {
    this.id=parseInt(this.route.snapshot.paramMap.get('id'));
    //alert(this.id)
    this.onabout()
    this.onfollowerdata()

    if(this.id==localStorage.getItem('id')){
      this.router.navigate(['/user'])
      

    }
    
    this.service.onget(this.id).subscribe(data=>{
      //console.log(data,'[[[[[[')
      this.data_user=data
      this.name=data.name
      this.email=data.email
      this.id1=data.username.id
      
      //alert(this.id1)
      //alert("i")
      this.id3=data.id
    
      //console.log(this.data_user,'----------------------------')
      
    
      //this.imageurl1="http://127.0.0.1:8000"+data.img+'/'
      //this.imageurl="/assets/img/5.jpg"
      this.img1=data.img+'1'

      if(this.img1=='null1'){
        //alert('ram')
        this.imageurl="/assets/img/4.jpg"

      }
      else{
        this.imageurl="http://127.0.0.1:8000"+data.img+'/'


      }
      //alert(this.img1)

      
    
    
    })

    this.postservice.onpostid(this.id).subscribe(data=>{
      this.post_data=data
      //alert(data)
    })
    




    this.postservice.onlikedata().subscribe(data=>{
      this.data1=data
      
    })
    this.postservice.onunlikedata().subscribe(data=>{
      this.data2=data


    })


    
  }


  onclick(id){
    this.postservice.onlike(id).subscribe(data=>{
      console.log(data,'------------------------like')
    })
    
  }
  onlike_a(id){
    //alert("like")

   //console.log(id,'rammmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm')
    
    const check_like=
      {"Post":id}
    
    this.postservice.onlike({"Post":id}).subscribe(data=>{
      console.log(data)

    })

    return 0
  }

  ondislike(id){
    //alert("dislike")
    this.postservice.onunlike({"Post":id}).subscribe(data=>{
      console.log(data)

    })


  }







  comments(id){
   // alert("hii")
    if(this.o==0){
      //alert("ok")
    this.postservice.oncomment(id).subscribe(data=>{
      console.log(data,'comment-------------------------------------------------')
      this.comment=data
      this.o=id
    })
    

  }
  else{
    this.o=0


  }

  }
  

  add_comment(id){
    if(this.forms.valid){
      //alert('hi')
      const logindata={
        Post_comment:this.forms.controls.Post_comment.value,
        Post:id
      }
      this.postservice.oncomment_add(logindata).subscribe(data=>{
        //alert(data)
        console.log(data,'comment==========================================')
      })
    }
    
  }





  hi(id){
    //alert(this.data1)
      //alert("okkkkkkkkkkkk")
      //console.log(this.data1,'---------like data-------------------')
      for(let g in this.data1){
        if(this.data1.hasOwnProperty(g) && (typeof this.data1[g]=="object")){
          //console.log(this.data1[g].User)
          if(id==this.data1[g].Post &&  String(this.data1[g].User)==localStorage.getItem('id')){
            return 1
          }
                  }
        
      }
      return 0
  }
 


  by(id){


    for(let g in this.data2){
      if(this.data2.hasOwnProperty(g) && (typeof this.data2[g]=="object")){
        //console.log(this.data2[g].User)
        if(id==this.data2[g].Post &&  String(this.data2[g].User)==localStorage.getItem('id')){
          return 1
        }
                }
      
    }
    return 0

  }



onabout(){

//alert("okkkkkkk")
//alert(this.id)

  this.service.onget(this.id).subscribe(data=>{
    console.log(this.user_data,'info')

    this.name1= data.name
    this.institute=data.Institute
    this.age=data.Age
    this.birth=data.BirthDate
    this.email1=data.email
    this.city=data.city_Name.CityName
    this.technical=data.TechnicalField.TechnicalName
    this.nontechnical=data.NonTechnicalField.NonTechnicalName

    

  })




}




follow(){
  //alert(this.id1)
  this.friendservice.onfollow(this.id1).subscribe(data=>{
    //alert(this.id1)
    //alert(data)
    //console.log(data,'-----------------------------------------------------------------------')
    if(data.status==200){
      let m="follow"+' '+this.name

      this.notification.success(m, 'Click to undo...', {
        timeOut: 10000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true,
        
    
        
    
      })


    }
    else{
      //alert("hiii")
      this.notification.error("some error occured", 'Click to undo...', {
        timeOut: 10000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true,
        
    
        
    
      })
    }
  })

}

onfollowerdata(){
  this.friendservice.onfollowdata().subscribe(data=>{
    this.f_data=data
    console.log(this.f_data,'follllllllllllllllll')

  })
}








oncheck(){

  
  //alert(this.id3)

  for(let h in this.f_data){
    //alert('data')
    //console.log(h)
    if(this.f_data.hasOwnProperty(h) && (typeof this.f_data[h]=="object")){
      //alert("okk1")
      if(this.id3==this.f_data[h].User && localStorage.getItem('id')==String(this.f_data[h].Followers)){
       // alert("okk2")
        return 1
      
  
      }
    }
  
    
   
  }
  return 0
  }





  Unfollow(){
    //alert(this.id1)
    this.friendservice.onunfollow(this.id1).subscribe(data=>{
      //alert(data.status)
      if(data.status==200){
        let m="Unfollow"+' '+this.name
  
        this.notification.success(m, ' ', {
          timeOut: 10000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
          
      
          
      
        })
  
  
      }
    })
  
  }
}

