import { Component, OnInit } from '@angular/core';
import {FormsModule,FormControl, FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-institute-register',
  templateUrl: './institute-register.component.html',
  styleUrls: ['./institute-register.component.css']
})
export class InstituteRegisterComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
  }

  message:string
 
 
  
  forms=new FormGroup(
    {
      username : new FormControl('',[
        Validators.required,
      ]
      ),
      password : new FormControl('',Validators.required)
    }



  
    
    
  
  
  );
  get username(){
    return this.forms.get('username')
  }
  get password(){
    return this.forms.get('password')
  }
  
  login(){
    
    
    if(this.forms.valid){
      alert('hi')
      const logindata={
        username:this.forms.controls.username.value,
        password:this.forms.controls.password.value
      }
      console.log(logindata,'pppppppppppppppppppqqqqqqqqqqqqqqqqqqqqqrrrrrrrrrrrrrrrrsssssssssss')


/*
      this.authservice.onlogin(logindata).subscribe(data => {
        alert(data)
        if(data.token){

          window.localStorage.setItem('token',data.token)
          console.log(data)
          

          
          this.router.navigate(['home'])
         
          console.log('------------------------------')



          
        }
        else{
          this.message='error';
        console.log(this.message)}
      })
*/
    }
    else{
      return;
    }
    
    
  }

  
  
  }

