import { Component, OnInit } from '@angular/core';
import { cvModel } from '../Models/cvModel';

@Component({
  selector: 'app-cv-tech',
  templateUrl: './cv-tech.component.html',
  styleUrls: ['./cv-tech.component.css']
})
export class CvTechComponent implements OnInit {
  showOrHideForm=false; 
  users: cvModel[] = [
    {
      id: 1,
      name: 'yahyaoui',
      firstname: 'salma',
      age: 22,
      cin: 11,
      job: 'Doctor',
      path: '../../assets/images/gl3.jpeg',
    },
    {
      id: 2,
      name: 'smida',
      firstname: 'asma',
      age: 22,
      cin: 11,
      job: 'Developer',
      path: 'http://placekitten.com/100/100',
    },
  ]; 
  selectedUser:cvModel=this.users[0]
  setSelectedUser(user: cvModel) {
    this.selectedUser = user;
  }
  constructor() { }

  ngOnInit(): void {
  }
  showOnCard(user:any){
    this.selectedUser=user
  }
}
