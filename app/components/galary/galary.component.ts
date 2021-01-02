import { Component, OnInit } from '@angular/core';
import {PostService} from 'src/app/services/basics/post.service'


@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.css']
})
export class GalaryComponent implements OnInit {
  image_data=[]

  constructor(private service:PostService) { }
  url="http://127.0.0.1:8000"
  imageurls="/assets/img/4.jpg"

  ngOnInit(): void {
    this.service.onuserpost().subscribe(data=>{
      this.image_data=data
      
    })  }

}
