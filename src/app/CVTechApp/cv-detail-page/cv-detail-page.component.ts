import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CvServiceService } from '../CvService/cv-service.service';
import { HireEmployeeComponent } from '../hire-employee/hire-employee.component';
import { HireService } from '../hireService/hire.service';
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
  hired=false
  constructor(private router: ActivatedRoute,private hireService :HireService, private cvService:CvServiceService,private router2:Router) {
    router.params.subscribe((params) => { 
      this.cvContent=this.cvService.getUser(params['id'])
      if(hireService.hired.includes(this.cvContent))
        this.hired=true
    });
  }
  imageObservable:Observable<string>=this.cvService.imageObservable
  ngOnInit(): void {}
  fireMe(){
    this.hireService.fire(this.cvContent.id)
    this.hired=false
    this.router2.navigate(["cv"])
  }
}
