import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }
  imageurl: string="/assets/img/404-error-pages-4.jpg"


  ngOnInit(): void {
  }

}
