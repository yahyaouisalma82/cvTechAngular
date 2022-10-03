import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { cvModel } from '../Models/cvModel';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css'],
})
export class ListComponentComponent implements OnInit {
  @Input() listOfUsers: cvModel[] = [];
  constructor() {}
  ngOnInit(): void {}

  @Output() valueChange = new EventEmitter();
  sendToCvTech(user: any) {
    this.valueChange.emit(user);
  }
}
