import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router} from '@angular/router'


import { AppRoutingModule } from './app-routing.module';
import {MaterialModule} from  'src/app/material/material.module' ;
import {LoginService} from 'src/app/services/basic/login.service'
import {LoginComponent} from './components/basics/login/login.component'
import { AppComponent } from './app.component';
import { NavComponent } from './components/basics/nav/nav.component';
import {RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './components/basics/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InstituteRegisterComponent} from 'src/app/components/register/institute-register/institute-register.component'
import { FirstComponent } from './components/basics/first/first.component';
import { FriendsComponent } from './components/basics/friends/friends.component';
import { NotificationComponent } from './components/basics/notification/notification.component';
import { from } from 'rxjs';
import { HomeFriendComponent } from './components/friend/home-friend/home-friend.component';
import { RequestComponent } from './components/friend/request/request.component';
import { CustomerRegisterComponent } from './components/register/customer-register/customer-register.component';
import {SimpleNotificationsModule} from 'angular2-notifications';
import { PostComponent } from './components/basics/post/post.component'
import {MyIntercepter} from 'src/app/myintercepter';
import { TimelineComponent } from './components/user/timeline/timeline.component';
import { FriendComponent } from './components/user/friend/friend.component';
import { SearchComponent } from './components/search/search.component';
import { GalaryComponent } from './components/galary/galary.component';
import { AboutComponent } from './components/about/about.component';
import { UserHomeComponent } from './components/user-home/user-home/user-home.component';
import { TagComponent } from './tag/tag.component';
import { LogoutComponent } from './logout/logout.component'
import {AuthGuard} from './auth.guard';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SentRequestComponent } from './sent-request/sent-request.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FirstComponent,
    FriendsComponent,
    NotificationComponent,
    LoginComponent,
    HomeFriendComponent,
    RequestComponent,
    CustomerRegisterComponent,
    InstituteRegisterComponent,
    PostComponent,
    TimelineComponent,
    FriendComponent,
    SearchComponent,
    GalaryComponent,
    AboutComponent,
    UserHomeComponent,
    TagComponent,
    LogoutComponent,
    AboutUsComponent,
    NotFoundComponent,
    SentRequestComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      //{path : '', redirectTo: '/base',pathMatch: 'full'},
      {path : '', component :LoginComponent},
      {path : 'user', component :FirstComponent,
      canActivate:[AuthGuard],children:[
        {path : '', component :TimelineComponent},
        {path : 'request', component :FriendComponent},
        {path : 'galary', component :GalaryComponent},
        {path : 'info', component :AboutComponent}

        


      ]},


      {path : 'friends', component :FriendsComponent,canActivate:[AuthGuard],children:[
        {path : '', component :HomeFriendComponent},
        {path : 'request', component :RequestComponent},
        {path : 'send-request', component :SentRequestComponent},



        


      ]},
      {path : 'home', component :HomeComponent,canActivate:[AuthGuard]},
      {path : 'test', component :CustomerRegisterComponent,canActivate:[AuthGuard]},
      {path : 'user/:id', component :UserHomeComponent,canActivate:[AuthGuard]},
      {path : 'tag/:name', component :TagComponent,canActivate:[AuthGuard]},
      {path : 'about_e_meet', component :AboutUsComponent,canActivate:[AuthGuard]},
      {path : '**', component :NotFoundComponent},





 
       
       
       
 
       
       
 
       ])
       

     
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:MyIntercepter,multi:true}
    
  ],
  
  
  bootstrap: [AppComponent],
  entryComponents: [
    CustomerRegisterComponent ,
    InstituteRegisterComponent   ,
    PostComponent,
    SearchComponent,
    NotificationComponent,
    LogoutComponent
    ,
    ],
    
})
export class AppModule { }
