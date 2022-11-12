import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miniword',
  templateUrl: './miniword.component.html',
  styleUrls: ['./miniword.component.css']
})
export class MiniwordComponent implements OnInit {
  colorText="red"
  size=16
  font="arial"
  constructor() { }

  ngOnInit(): void {
  }

}
