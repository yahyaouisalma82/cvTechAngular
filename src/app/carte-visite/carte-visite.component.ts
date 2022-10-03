import { Component, OnInit,Input } from '@angular/core';
import { cvModel } from '../Models/cvModel';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css'],
})
export class CarteVisiteComponent implements OnInit {
  @Input() showForm=false;
  @Input() showedUser :cvModel= {id:0,name:"",firstname:"",age:0,cin:0,job:"",path:""};
  
  constructor() {}

  ngOnInit(): void {}
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
