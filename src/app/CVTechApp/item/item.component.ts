import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }
  @Output() valueChange=new EventEmitter();
  selectUser(){
    this.valueChange.emit(this.userDetails)
  }
}
