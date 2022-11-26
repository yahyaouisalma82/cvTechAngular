import { Component, OnInit ,Input} from '@angular/core'; 
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  myColor="red";
  constructor(private router:ActivatedRoute) { 
    router.params.subscribe(params=>{this.myColor=params['color']});}

  ngOnInit(): void {
  }
  colorMeSon(valueColor:string){
    this.myColor=valueColor;
    console.log('====================================');
    console.log(valueColor);
    console.log('====================================');
  }
}
