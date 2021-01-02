import { Component, OnInit } from '@angular/core';
import {PostService} from 'src/app/services/basics/post.service'
import {Like} from 'src/app/components/basics/home/Like'
import {UnLike} from 'src/app/components/basics/home/unlike'
import {SignupClientService} from 'src/app/services/basics/signup-client.service'
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import {NotificationsService} from 'angular2-notifications'
import {FormsModule,FormControl, FormGroup,Validators,} from '@angular/forms';
import {ActivatedRoute} from "@angular/router"



@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  constructor(private service:PostService,
    private notification:NotificationsService,
    private parmp:ActivatedRoute) { }
    post_user:[];
  imageurl
  url="http://127.0.0.1:8000"
  imageurls="/assets/img/4.jpg"
  data1:Like[]
  img:String
  comment:[]
o=0
tag
  data2:UnLike[]



  ngOnInit(): void {
    this.tag=this.parmp.snapshot.paramMap.get("name")


    this.service.onposttag(this.tag).subscribe(data=>{
      //console.log(data,'post user')
      this.post_user=data
      if(String(data.img)=='null'){

        this.imageurl="/assets/img/4.jpg"
    
      }
      else{
        this.imageurl="http://127.0.0.1:8000"+data.img+'/'
    
      }
    })



    this.service.onlikedata().subscribe(data=>{
      this.data1=data
      
    })
    this.service.onunlikedata().subscribe(data=>{
      this.data2=data


    })

  }








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


  onlike_a(id){
    //console.log(id,'rammmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm')
     
     const check_like=
       {"Post":id}
     
     this.service.onlike({"Post":id}).subscribe(data=>{
       //console.log(data)
 
     })
 
     return 0
   }





   ondislike(id){
    this.service.onunlike({"Post":id}).subscribe(data=>{
      //console.log(data)

    })


  }



  comments(id){
    if(this.o==0){
    this.service.oncomment(id).subscribe(data=>{
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
      this.service.oncomment_add(logindata).subscribe(data=>{
        //alert(data)
        console.log(data,'comment==========================================')

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





}
