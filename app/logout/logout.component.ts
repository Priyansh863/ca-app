import { Component, OnInit } from '@angular/core';
import {MatDialogRef } from '@angular/material/dialog';
import {Router} from '@angular/router'
import { from } from 'rxjs';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private dialog:MatDialogRef<LogoutComponent>,
    private route:Router
    ) { }

  ngOnInit(): void {
  }

  yes(){
    localStorage.removeItem("id")
    sessionStorage.removeItem("token")
    this.dialog.close()
    this.route.navigate(['/'])
  }
  no(){
    this.dialog.close()
  }


}
