import { Component, OnInit } from '@angular/core';
import {SignupClientService} from 'src/app/services/basics/signup-client.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user_data=[]
  name
  age
  birth
  technical
  email
  nontechnical
  institute
  city

  constructor(private service : SignupClientService) { }

  ngOnInit(): void {
    this.service.onget(localStorage.getItem('id')).subscribe(data=>{
      this.user_data=data
      alert(this.user_data)
      console.log(this.user_data,'info')

      this.name= data.name
      this.institute=data.Institute
      this.age=data.Age
      this.birth=data.BirthDate
      this.email=data.email
      this.city=data.city_Name.CityName
      this.technical=data.TechnicalField.TechnicalName
      this.nontechnical=data.NonTechnicalField.NonTechnicalName

      

    })
  }





  







}
