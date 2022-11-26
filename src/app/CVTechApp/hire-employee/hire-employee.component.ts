import { Component, OnInit } from '@angular/core';
import { HireService } from '../hireService/hire.service';
import { cvModel } from '../Models/cvModel';

@Component({
  selector: 'app-hire-employee',
  templateUrl: './hire-employee.component.html',
  styleUrls: ['./hire-employee.component.css']
})
export class HireEmployeeComponent implements OnInit {
  hiredPeople:cvModel[]=this.hireService.getHired()
  constructor(private hireService:HireService) { }

  ngOnInit(): void {
  }

}
