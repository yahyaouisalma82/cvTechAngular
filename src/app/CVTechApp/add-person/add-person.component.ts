import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CvServiceService } from '../CvService/cv-service.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent implements OnInit {
  constructor(private cvService: CvServiceService, private router: Router) {}

  ngOnInit(): void {}
  addMe(form: NgForm) {
    this.cvService.addUser(form.value);
    this.router.navigate(['cv']);
  }
}
