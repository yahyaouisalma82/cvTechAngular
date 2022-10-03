import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  myColor="red";
  constructor() { }

  ngOnInit(): void {
  }
  colorMeSon(valueColor:string){
    this.myColor=valueColor;
  }
}
