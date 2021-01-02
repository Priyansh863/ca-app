import { Component, OnInit } from '@angular/core';
import {FormsModule,FormControl, FormGroup,Validators,} from '@angular/forms';
import {LoginService} from 'src/app/services/basic/login.service'
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import {CustomerRegisterComponent} from 'src/app/components/register/customer-register/customer-register.component'
import {InstituteRegisterComponent} from 'src/app/components/register/institute-register/institute-register.component'
import {NotificationsService} from 'angular2-notifications'

import { from } from 'rxjs';
import {Router} from '@angular/router'
import { Title } from '@angular/platform-browser';
import { Content } from '@angular/compiler/src/render3/r3_ast';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice: LoginService,private router:Router,private dialog:MatDialog,private notification : NotificationsService
    ) { 
      
    
    }

  ngOnInit(): void {
  }
  imageurl="/assets/img/6.jpg"


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
      //alert('hi')
      const logindata={
        username:this.forms.controls.username.value,
        password:this.forms.controls.password.value
      }



      this.authservice.onlogin(logindata).subscribe(data => {
        //alert(data)
        console.log(data,'dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        if(data.token){

          window.localStorage.setItem('id',data.id)
          sessionStorage.setItem('token',data.token)

        //  console.log(data)
          

          
          this.router.navigate(['home'])
         
          //console.log('------------------------------')



          
        }
        else{
          this.message='error';
        //console.log(this.message)
      }
      })

    }
    else{
      return;
    }
    
    
  }
 
  Open(){
    const dilogconfig=new MatDialogConfig()
    dilogconfig.disableClose=true;
    dilogconfig.autoFocus=true;
    dilogconfig.width="60%";

    
    this.dialog.open(CustomerRegisterComponent,dilogconfig

    )

  }
  Open1(){
    const dilogconfig=new MatDialogConfig()
    dilogconfig.disableClose=true;
    dilogconfig.autoFocus=true;
    dilogconfig.width="100%";
    dilogconfig.height="300%";


    
    this.dialog.open(InstituteRegisterComponent,dilogconfig

    )

  }


  }
