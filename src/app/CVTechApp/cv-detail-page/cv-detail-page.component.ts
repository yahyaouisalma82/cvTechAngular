import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    cin: 0,
    job: '',
    path: '',
  }; 
  constructor(private router: ActivatedRoute,private cvService:CvServiceService) {
    router.params.subscribe((params) => { 
      this.cvContent=this.cvService.getUser(params['id'])
    });
  }
  ngOnInit(): void {}
}
