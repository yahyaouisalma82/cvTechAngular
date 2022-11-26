import { Component, OnInit } from '@angular/core';
import { CvServiceService } from '../CvService/cv-service.service';
import { cvModel } from '../Models/cvModel';

@Component({
  selector: 'app-cv-tech',
  templateUrl: './cv-tech.component.html',
  styleUrls: ['./cv-tech.component.css']
})
export class CvTechComponent implements OnInit {
  showOrHideForm=false; 
  users: cvModel[] =this.cvService.getUsers()
  selectedUser:cvModel=this.users[0]
  setSelectedUser(user: cvModel) {
    this.selectedUser = user;
  }
  constructor(private cvService:CvServiceService) { }

  ngOnInit(): void { 
  }
  showOnCard(user:any){
    this.selectedUser=user
  }
}
