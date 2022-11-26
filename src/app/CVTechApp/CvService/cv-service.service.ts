import { Injectable } from '@angular/core';
import { cvModel } from '../Models/cvModel';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {
  users: cvModel[] = [
    {
      id: 1,
      name: 'yahyaoui',
      firstname: 'salma',
      age: 22,
      cin: 11,
      job: 'Doctor',
      path: '../../assets/images/gl3.jpeg',
    },
    {
      id: 2,
      name: 'smida',
      firstname: 'asma',
      age: 22,
      cin: 11,
      job: 'Developer',
      path: 'http://placekitten.com/100/100',
    },
    { id: 3,
      name: 'bouali',
      firstname: 'salem',
      age: 22,
      cin: 11,
      job: 'Developer',
      path: '  ',}
  ]; 
  constructor() { }
  getUsers():cvModel[]{
    return this.users
  }
}
