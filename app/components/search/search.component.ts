import { Component, OnInit } from '@angular/core';
import {AppComponent} from 'src/app/app.component'
import {FriendService} from 'src/app/services/basics/friend.service'
import { from } from 'rxjs';
import {FormsModule,FormControl, FormGroup,Validators,} from '@angular/forms';
import {MatDialogRef } from '@angular/material/dialog';
import {Friend} from 'src/app/components/search/friend'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name
  url="http://127.0.0.1:8000"

  data_user=[]
  l=[]
  data1:Friend[]
  l1=[]
  k
  b
  

  constructor(private service: FriendService,
    private dialog:MatDialogRef<SearchComponent>
    
    ) { }

  ngOnInit(): void {
    //console.log(this.c.other(),'-----------------------------')
    this.name=this.service.onpost()
    //alert(this.name)
    this.service.onsearchuser(this.name).subscribe(data=>{
      //console.log(data,'-----------77---------------------------------------------------')

      this.data_user=data
      //alert('------------------------------------------------------------------------')
    })



this.service.onfrienddata().subscribe(data=>{
  //alert(data)
  this.data1=data
  //console.log(this.data1,'----------------------------------------------------------data')
 
})


//console.log(this.l,this.l1,'data idddddddddddddddddddjjjjjjjjjjjjjjjjj')
//alert(this.l)


  }


  forms=new FormGroup(
    {
      exit : new FormControl(this.name,[
        Validators.required,
      ]
      )
    }
  )

  get exit(){
    return this.forms.get('exit')
  }









  imageurl: string="/assets/img/4.jpg"

  open(){
    if(this.forms.valid){
      //alert(this.forms.controls.exit.value)
      this.service.onsearchuser(this.forms.controls.exit.value).subscribe(data=>{
        this.data_user=data
        console.log(this.data_user,'searchhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
      })

    }




    






  }
  onclose(){
  
    this.forms.reset();
    this.dialog.close()
    
  
  }
  onsend(id){
    //alert(id)
    console.log(id,'idddddddddddddddddddddddddddddddddddddddddddddddddddd')
    this.service.onsendrequest(id).subscribe(data=>{
      //alert(data)
      //console.log(data)
    })


  }
  
oncheck(id){

this.k=id
//alert(typeof this.k)
//alert()


for(let h in this.data1){
  if(this.data1.hasOwnProperty(h) && (typeof this.data1[h]=="object")){
    //alert(this.k)
    //alert(typeof this.data1[h].FromUser)
    //console.log(this.k,'-----------------------------------ram ram')
    if(this.k==this.data1[h].FromUser && localStorage.getItem('id')==String(this.data1[h].ToUser)){
      //alert('ok1')
    return 1

    }
    else if(this.k==this.data1[h].ToUser && localStorage.getItem('id')==String(this.data1[h].FromUser)){
      //alert('ok2')
      return 1



    }
    else{
    }

    
              
    
    
  }

  
 
}
return 0
}



  


}
