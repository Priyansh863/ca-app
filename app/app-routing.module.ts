import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotificationsService} from 'angular2-notifications'
import { from } from 'rxjs';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
