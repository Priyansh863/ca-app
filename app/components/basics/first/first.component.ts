import { Component, OnInit } from '@angular/core';
import {SignupClientService} from 'src/app/services/basics/signup-client.service'
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private service:SignupClientService,
    
    ) { }
  data_user:[];
  post_data:[]
  name
  email
  imageurl: string="/assets/img/2.jpeg"
  profile:File=null
   formData=new FormData();


  ngOnInit(): void {
    this.service.onget(localStorage.getItem('id')).subscribe(data=>{
      console.log(data,'[[[[[[')
      this.data_user=data
      this.name=data.name
      this.email=data.email
      
    
      console.log(this.data_user,'----------------------------')
      if(String(data.img)=='null'){
    
        this.imageurl="/assets/img/4.jpg"
    
      }
      else{
        this.imageurl="http://127.0.0.1:8000"+data.img+'/'
    
      }
    
      
      
    
    
    })
    
    
  }
  navLinks=[
    {path:'/user',label:'Timeline'},
    {path:'/user/request',label:'Friends'},
    

  ]




  fileinput(x:FileList){
    alert('iii')
    
    this.profile=x.item(0)
    var reader=new FileReader();
    reader.onload=(event:any)=>{
      this.imageurl=event.target.result;
    }
    reader.readAsDataURL(this.profile)
    

    if(this.profile!=null){
      console.log(this.profile)
      this.formData.append('img',this.profile,this.profile.name)
      console.log(this.formData,'imageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
      this.service.onimage(localStorage.getItem("id"),this.formData).subscribe(data=>{
        console.log(data,'--------------------------')
        alert("okk5kkk")
      })
      

    }
  
  }




}
