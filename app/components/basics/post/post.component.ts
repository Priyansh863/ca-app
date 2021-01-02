import { Component, OnInit } from '@angular/core';
import {FormsModule,FormControl, FormGroup,Validators,FormBuilder, Form} from '@angular/forms';
import {PostService} from 'src/app/services/basics/post.service'
import {MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  profile:File=null
  imageurl:string
   formData=new FormData();
  messang=0
  file
  constructor(
private service:PostService,
private fb:FormBuilder,
private dilogref:MatDialogRef<PostComponent>
  ) { }

  ngOnInit(): void {
  }
  fileinput(x:FileList){
    
    this.profile=x.item(0)
    var reader=new FileReader();
    reader.onload=(event:any)=>{
      this.imageurl=event.target.result;
    }
    reader.readAsDataURL(this.profile)
    
this.messang=1

  
  
  }

  
  forms=new FormGroup(
    {
      title : new FormControl('',[
        Validators.required,
      ]
      ),
      text : new FormControl('',Validators.required),
        
      
      img : new FormControl('',[
       
      ]
      ),
    }
  )
   
  login(){
    
    
    
    if(this.forms.valid){
     // alert('hi');
      if(this.profile!=null){
        this.formData.append('Image',this.profile,this.profile.name)

      }
      this.formData.append('Post_Title',this.forms.controls.title.value)
      this.formData.append('Text',this.forms.controls.text.value)
      //console.log(this.formData,'image data00000000000000000000')

      
      
     

console.log(this.formData,'login data')

      this.service.onget(this.formData).subscribe(data => {
       // alert(data)
        //console.log(data,'dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        if(data){

          
         // console.log(data)
          

          
          
         
          //console.log('------------------------------')
          this.onclose()



          
        }
        else{
          
        console.log()}
      })

    }
    else{
      return;
    }
    
    
  }
  onclose(){
  
    this.forms.reset();
    this.dilogref.close()
    
  
  }
 
  

}
