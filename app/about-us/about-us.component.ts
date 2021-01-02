import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }
  imageurl: string="/assets/img/rahul.jpeg"
  imageurl1: string="/assets/img/ankesh.jpeg"
  imageurl2: string="/assets/img/priyansh.jpeg"




  ngOnInit(): void {
  }

}
