import { Component, OnInit } from '@angular/core';
import {FormsModule,FormControl, FormGroup,Validators,} from '@angular/forms';
import {CityService} from 'src/app/services/basic/city.service'
import {Observable} from 'rxjs'
import {MatDialogRef } from '@angular/material/dialog';
import {SignupClientService} from 'src/app/services/basics/signup-client.service'
import {NotificationsService} from 'angular2-notifications'


import { from } from 'rxjs';
import {map,startWith} from 'rxjs/operators'

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {
  city_data:[];
  state:[]
  technical_data:[]
  user_d:[]
  a="/assets/img/6.jpg"

  l=[]

  non_technical_data:[]
  institutedata:[]
   message_email:number
  message_username:number=0
 message_password:number
 

  filter:Observable<string[]>;

  myControl = new FormControl();

  nontechnical:any=[
    {'id':1,'value':'qqq'},
    {'id':1,'value':'qqq'},


  ]
  technical:any=[
    {'id':1,'value':'qqq'},
    {'id':1,'value':'qqq'},


  ]

  constructor(
private state_city:CityService,
private dilogref: MatDialogRef<CustomerRegisterComponent>,
private authservice: SignupClientService,
private notification : NotificationsService

  ) { }

  ngOnInit(): void {
    this.state_city.oncity().subscribe(data=>{
    //  console.log(data),
      this.city_data=data
    })
    this.state_city.onstate().subscribe(data=>{
    //  console.log(data)
      this.state=data



    })
    this.state_city.ontechnical().subscribe(data=>{
     // console.log(data)
      this.technical_data=data



    })
    this.state_city.on_non_technical().subscribe(data=>{
     // console.log(data)
      this.non_technical_data=data



    })
    //console.log(this.onunique("rahul"),'uniqueeeeeeeeeeeeeeee')
    
    
    
  }
  

 
  
  forms=new FormGroup(
    {
      username : new FormControl('',[
        Validators.required,
      ]
      ),
      password : new FormControl('',Validators.required),
      email : new FormControl('',[
        Validators.required,
      ]
      ),
      first_name : new FormControl('',[
        Validators.required,
      ]
      ),
      

      city : new FormControl('',[
        Validators.required,
      ]
      ),
      
      Technical_Field : new FormControl('',[
        Validators.required,
      ]
      ),
      
      Non_Technical : new FormControl('',[
        Validators.required,
      ]
      ),
      
      Birthday : new FormControl('',[
        Validators.required,
      ]
      ),
      confirm_password : new FormControl('',[
        Validators.required,
      ]
      ),
      
      Institute : new FormControl('',[
        Validators.required,
      ]
      )
      
   
    }



  
    
    
  
  
  );
  get city(){
    return this.forms.get('city')
  }
  get username(){
    return this.forms.get('username')
  }
  get password(){
    return this.forms.get('password')
  }
  
  get email(){
    return this.forms.get('email')
  }
  get first_name(){
    return this.forms.get('first_name')
  }
  
  
  get Technical_Field(){
    return this.forms.get('Technical_Field')
  }
  
  get Non_Technical(){
    return this.forms.get('Non_Technical')
  }
  get Birthday(){
    return this.forms.get('Birthday')
  }
  
  get confirm_password(){
    return this.forms.get('confirm_password')
  }
  
  get Institute(){
    return this.forms.get('Institute')
  }
  
  login(){
    
    
    if(this.forms.valid){

    //  alert('hippp')
      let p=this.forms.controls.username.value
      let p1=this.forms.controls.email.value
     // console.log(p1,'re')
     this.onunique(p)
     this.onuniqueemail(p1)
     //alert("ram ram")
     if(this.forms.controls.confirm_password.value!=this.forms.controls.password.value){
       this.message_password=1

     }
     else{
       this.message_password=0
     }

     


     

      const logindata={
        
        username:{
          username:this.forms.controls.username.value,
          
        },
        name:this.forms.controls.first_name.value,
        email:this.forms.controls.email.value,
        
        Institute:this.forms.controls.Institute.value,
        confirm_password:this.forms.controls.confirm_password.value,
        password:this.forms.controls.password.value,

        Birthday:this.forms.controls.Birthday.value,
        city_Name:this.forms.controls.city.value,
        //Institute:this.forms.controls.Institute.value,
        
        TechnicalField:this.forms.controls.Technical_Field.value,
        NonTechnicalField:this.forms.controls.Non_Technical.value,
}
this.authservice.onsignup(logindata).subscribe(data => {
  
  console.log(data,'[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]')
  if(data.status==200){


    
  this.notification.success('Accont created!', 'Click to undo...', {
    timeOut: 10000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true,
    

    

  });
  
   // alert('okk')
    this.onclose()

  }

       // alert(data)
       // console.log(data)

    })
      }
    else{
      return;
    }
    
    
  }
  onClear(){
this.forms.reset()  }

onclose(){
  this.forms.reset()
this.dilogref.close()

}





onunique(name){
 // alert("ram ram 1")

  this.authservice.onuserdata().subscribe(data=>{  
   // alert("ram ram 1")

    this.user_d=data
    //console.log(this.user_d,'----------------77777')
    if(this.message_username==1){
      this.message_username=0
    }

    for(let h in data){
      //alert("ram ram 2")

      if(data.hasOwnProperty(h) && (typeof data[h]=="object")){
        //alert("ram ram 3")

        if(String(data[h].username.username)==String(name)){
          //alert("ram ram 4")

                  this.message_username=1
                 // alert(this.message_username)
                  console.log(data[h].username.username)
                  break
         }
        
      }
      
  
  }

  })
  if(this.message_username==1){
    return 1
  }
  else{
    this.message_username=0

    return 0
  }
}






onuniqueemail(email){
  this.authservice.onuserdata().subscribe(data=>{  
    this.user_d=data
    //console.log(data,'dataaggggaaaaa')
    if(this.message_email==1){
      this.message_email=0
    }

    for(let h in data){
      //console.log(data[h].email,'oooooo')

      if(String(data[h].email)==String(email)){
        console.log(data[h].email,'emailllllllllllllllllll')
        this.message_email=1
      }
      
      
  
  }

  })
  if(this.message_email==1){
    return 1
  }
  else{
    this.message_email=0

    return 0
  }
}







}
