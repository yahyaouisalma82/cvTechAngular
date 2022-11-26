import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css']
})
export class RouterSimulatorComponent implements OnInit {
  color:string='lightblue'
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onNavigate(route:any){
    if(route=="ColorMe")
      this.router.navigate([route,this.color])
    else
      this.router.navigate([route])
  }
}
