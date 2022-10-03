export class cvModel {
    id: number;
    name: string;
    firstname: string;
    age: number;
    path: string;
    job: string;
    cin: number;
    constructor(id: number = 0,
                name: string = '',
                firstname: string = '',
                age: number = 0,
                path: string = '',
                cin: number = 0,
                job: string = ''
    ) {
      this.id = id;
      this.name = name;
      this.firstname = firstname;
      this.age = age;
      this.path = path;
      this.cin = cin;
      this.job = job;
    }
  }