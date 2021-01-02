import { Component, OnInit } from '@angular/core';
import {SignupClientService} from 'src/app/services/basics/signup-client.service'
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import {NotificationsService} from 'angular2-notifications'
import {FormsModule,FormControl, FormGroup,Validators,} from '@angular/forms';
import {Router} from '@angular/router'
import {Like} from 'src/app/components/basics/home/Like'
import {UnLike} from 'src/app/components/basics/home/unlike'
import {LogoutComponent} from 'src/app/logout/logout.component'

import {PostComponent} from 'src/app/components/basics/post/post.component'


import { from } from 'rxjs';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import {PostService} from 'src/app/services/basics/post.service'
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data_user:[];
  post_data:[]
  comment:[]
  l=[]
  name
  len
  o=0
  data1:Like[]
  img:String
  data2:UnLike[]
  
  url="http://127.0.0.1:8000"
  imageurls="/assets/img/4.jpg"

  constructor(private service:SignupClientService
    ,
    private services: PostService,
    private dialog:MatDialog,
    private notification:NotificationsService,
    private route:Router
    
    ) { }

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




    this.services.onlikedata().subscribe(data=>{
      this.data1=data
      
    })
    this.services.onunlikedata().subscribe(data=>{
      this.data2=data


    })
    





    

this.service.onget(localStorage.getItem('id')).subscribe(data=>{
  //console.log(data,'[[[[[[')
  this.data_user=data
  this.len=Object.keys(data).length
  

  this.name=data.name
  

  this.img=data.img+'1'
  if(this.img=='null1'){

    this.imageurl="/assets/img/4.jpg"

  }
  else{
    this.imageurl="http://127.0.0.1:8000"+data.img+'/'

  }

  this.services.onpost().subscribe(data=>{
    console.log(data,'===============kk')
    this.post_data=data
    
    //console.log(this.post_data,'postttttttttttttttttttttttt')
  })
  
  


})



  }
  imageurl: string
  Open(){
    const dilogconfig=new MatDialogConfig()
    dilogconfig.disableClose=true;
    dilogconfig.autoFocus=true;
    dilogconfig.width="60%";

    
    this.dialog.open(PostComponent,dilogconfig

    )

  }
  onclick(id){
    this.services.onlike(id).subscribe(data=>{
      //console.log(data,'------------------------like')
    })
    
  }
  onlike_a(id){
   //console.log(id,'rammmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm')
    
    const check_like=
      {"Post":id}
    
    this.services.onlike({"Post":id}).subscribe(data=>{
      //console.log(data)
      if(data.status==200){
        this.notification.success("Post Like", 'Click to undo...', {
          timeOut: 10000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
          
      
          
      
        })

      }

    })

    return 0
  }
  comments(id){
    if(this.o==0){
    this.services.oncomment(id).subscribe(data=>{
      //console.log(data,'comment-------------------------------------------------')
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
      this.services.oncomment_add(logindata).subscribe(data=>{
        //alert(data)
        //console.log(data,'comment==========================================')

        if(data.Status==200){
          this.notification.success("Comment Add", 'Click to undo...', {
            timeOut: 10000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            
        
            
        
          })
        }
      })
    }
    
  }
  ondislike(id){
    console.log('-------------------------------------------------------')

    this.services.onunlike({"Post":id}).subscribe(data=>{
      console.log(data,'-------------------------------------------------------')
      if(data.status==200){
        this.notification.success("Post UnLike", 'Click to undo...', {
          timeOut: 10000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
          
      
          
      
        })

      }
      

    })


  }
  onhome(id){
    //alert(id)

  }
  hi(id){
    //alert(this.data1)
      //alert("okkkkkkkkkkkk")
      //console.log(this.data1,'---------like data-------------------')
      for(let g in this.data1){
        if(this.data1.hasOwnProperty(g) && (typeof this.data1[g]=="object")){
         // console.log(this.data1[g].User)
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

logout(){
  this.dialog.open(LogoutComponent,{
    width:"390px",
    disableClose:true
  })

}
  
  

}
