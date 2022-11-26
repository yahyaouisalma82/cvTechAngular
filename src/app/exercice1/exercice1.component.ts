import { Component,EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component implements OnInit {
  @Input() colorDad: string = 'red';
  myFavColor = 'green';
  defaultColor = 'blue';
  color = this.defaultColor;
  constructor() {}

  ngOnInit(): void {}
  changeColor(newColor: string) {
    this.color = newColor;
  }
  backToDefault() {
    this.color = this.defaultColor;
  }
  @Output() colorEmetter = new EventEmitter();

  colorMyDad() {
    this.colorEmetter.emit(this.color);
  }
}
