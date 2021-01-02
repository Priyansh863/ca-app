import { Component } from '@angular/core';
import {NotificationsService} from 'angular2-notifications'
import {NotificationComponent} from 'src/app/components/basics/notification/notification.component'
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import {SearchComponent} from 'src/app/components/search/search.component'
import {FormsModule,FormControl, FormGroup,Validators,} from '@angular/forms';
import {FriendService} from 'src/app/services/basics/friend.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'industrial-project';
  imageurl="/assets/img/6.jpg"
  value=''
  c=0
  token=sessionStorage.getItem("token")

  forms=new FormGroup(
    {
      name : new FormControl('',[
        Validators.required,
      ]
      )
    }
  )

  get name(){
    return this.forms.get('name')
  }

  
  navLinks=[
     {
    path:'/home',label:'home'
  },
  {
    path:'/friends',label:'friends'
  },

  {
    path:'/base',label:'events'
  }
  ,
  {
    path:'/base',label:'tags'
  }
  ]
  constructor(private notification:NotificationsService,private service:FriendService
    
    ,
    private dialog:MatDialog
    ){
      

      
      this.service.onnotification().subscribe(data=>{
        //alert(data)
        console.log(data,'--------------------gggggggggggggggggggggggggg')
        this.c=Object.keys(data).length
        //alert("ggg")
        //alert(this.c)
        //alert("ooo")
        console.log(this.c,'-------------------------------------------------gagag')
        if(this.c!=0){
          let g='You have '+String(this.c)+' Notification'
          this.notification.info(g, 'Click to undo...', {
            timeOut: 10000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            
        
            
        
          });
        }
      })

    
    
  }
  other(){
    return this.value

  }
  open(){

    if(this.forms.valid){
      const name=this.forms.controls.name.value
      
      

      
      this.value=name
      this.service.onget(this.value)


      

    
    const dilogconfig=new MatDialogConfig()
    dilogconfig.disableClose=true;
    //dilogconfig.autoFocus=true;
    dilogconfig.width="70%";
    dilogconfig.height="100%";
    
    
    

    
    this.dialog.open(SearchComponent,dilogconfig
    
    )
    }
  }
  open1(){
    const dilogconfig=new MatDialogConfig()
    dilogconfig.disableClose=true;
    //dilogconfig.autoFocus=true;
    dilogconfig.width="70%";
    dilogconfig.height="90%";
    
    
    

    
    this.dialog.open(NotificationComponent,dilogconfig
    )

  }
ondata(){
  this.notification.success('Item created!', 'Click to undo...', {
    timeOut: 3000,
    showProgressBar: true,
    rtl:true,
    pauseOnHover: true,
    clickToClose: true,
    animate:"fromTop"
    

    

  });





  this.notification.error('Error!', 'Click to undo...', {
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true,
    

    

  });




  //alert('ok')
}

  }

