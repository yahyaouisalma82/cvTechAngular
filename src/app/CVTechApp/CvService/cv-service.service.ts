import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { cvModel } from '../Models/cvModel';

@Injectable({
  providedIn: 'root',
})
export class CvServiceService {
  selectCvSubject = new Subject<cvModel>();
  imageObservable: Observable<string>;
  paths = ['avatar3.png', 'gl3.jpeg', 'rotating_card_thumb.png'];
  users: cvModel[] = [
    {
      id: 1,
      name: 'yahyaoui',
      firstname: 'salma',
      age: 22,
      cin: '11',
      job: 'Doctor',
      path: '../../assets/images/gl3.jpeg',
    },
    {
      id: 2,
      name: 'smida',
      firstname: 'asma',
      age: 22,
      cin: '11',
      job: 'Developer',
      path: 'http://placekitten.com/100/100',
    },
    {
      id: 3,
      name: 'bouali',
      firstname: 'salem',
      age: 22,
      cin: '11',
      job: 'Developer',
      path: '  ',
    },
    // {
    //   id: 1,
    //   name: 'yahyaoui',
    //   firstname: 'salma',
    //   age: 22,
    //   cin: '11',
    //   job: 'Doctor',
    //   path: '../../assets/images/gl3.jpeg',
    // },{
    //   id: 1,
    //   name: 'yahyaoui',
    //   firstname: 'salma',
    //   age: 22,
    //   cin: '11',
    //   job: 'Doctor',
    //   path: '../../assets/images/gl3.jpeg',
    // },
  ];
  myuser: cvModel = {
    id: 0,
    name: '',
    firstname: '',
    age: 0,
    cin: '',
    job: '',
    path: '',
  };
  constructor() {
    this.imageObservable = new Observable((observer) => {
      let i = this.paths.length - 1;
      setInterval(() => {
        if (i < 0) {
          i = this.paths.length - 1;
        }
        observer.next(this.paths[i--]);
      }, 1000);
    });
  }
  getUsers(): cvModel[] {
    return this.users;
  }
  getUser(id: number): cvModel {
    const user = this.users.find((user) => user.id == id);
    if (user) return user;
    return this.myuser;
  }
  removeUser(id: number) {
    this.users = this.users.filter((user) => user.id != id);
  }
  addUser(cv: cvModel) {
    cv.id = this.users.length + 1;
    this.users.push(cv);
  }
  selectCv(cv: cvModel) {
    this.selectCvSubject.next(cv); //any person subscribed will get this notif
  }
}
