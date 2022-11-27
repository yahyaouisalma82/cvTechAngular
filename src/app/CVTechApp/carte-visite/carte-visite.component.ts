import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { HireService } from '../hireService/hire.service';
import { cvModel } from '../Models/cvModel';
@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css'],
})
export class CarteVisiteComponent implements OnInit {
  @Input() showForm=false;
  @Input() showedUser :cvModel =null;
  
  constructor(private hireService:HireService,private router:Router) {}

  ngOnInit(): void {}
  hireMe(){
    this.hireService.hire(this.showedUser)
  }
  changeInfo(attribut: string, value: string) {
    switch (attribut) {
      case 'name': {
        this.showedUser.name = value;
        break;
      }
      case 'firstName': {
        this.showedUser.firstname = value;
        break;
      }
      case 'path': {
        this.showedUser.path = value;
        break;
      }
      case 'job': {
        this.showedUser.job = value;
        break;
      }
    }
  }
}
