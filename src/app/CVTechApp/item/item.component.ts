import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { CvServiceService } from '../CvService/cv-service.service';
import { cvModel } from '../Models/cvModel';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  @Input() userDetails: cvModel= {
    id: 0,
    name: '',
    firstname: '',
    age: 0,
    cin: '',
    job: '',
    path: '',
  };
  constructor(private cvService:CvServiceService) { }

  ngOnInit(): void {
  }
  // @Output() valueChange=new EventEmitter();
  selectUser(){
    // this.valueChange.emit(this.userDetails)
    this.cvService.selectCv(this.userDetails)
  }
}
