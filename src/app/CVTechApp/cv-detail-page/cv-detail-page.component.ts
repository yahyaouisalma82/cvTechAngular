import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvServiceService } from '../CvService/cv-service.service';
import { cvModel } from '../Models/cvModel';

@Component({
  selector: 'app-cv-detail-page',
  templateUrl: './cv-detail-page.component.html',
  styleUrls: ['./cv-detail-page.component.css'],
})
export class CvDetailPageComponent implements OnInit {
  cvContent: cvModel= {
    id: 0,
    name: '',
    firstname: '',
    age: 0,
    cin: '',
    job: '',
    path: '',
  }; 
  constructor(private router: ActivatedRoute,private cvService:CvServiceService,private router2:Router) {
    router.params.subscribe((params) => { 
      this.cvContent=this.cvService.getUser(params['id'])
    });
  }
  ngOnInit(): void {}
  fireMe(){
    this.cvService.removeUser(this.cvContent.id)
    this.router2.navigate(["cv"])
  }
}
