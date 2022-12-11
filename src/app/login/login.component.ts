import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  placeholdermail = 'myUserEmail';
  constructor(private router: Router) {}

  ngOnInit(): void {}
  sendForm(form: NgForm) {
    console.log('eee', form.formDirective);
    this.router.navigate(['cv']);
  }
}
