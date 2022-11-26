import { Injectable } from '@angular/core';
import { cvModel } from '../Models/cvModel';

import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class HireService {
  hired:cvModel[]=[]
  constructor(private toastrService:ToastrService) { }
  hire(emp:cvModel){
    if(this.hired.includes(emp))
      this.toastrService.warning(emp.firstname+ " already hired","",{timeOut: 2000})
    else{
      this.hired.push(emp)
      this.toastrService.success(emp.firstname+ " is hired !","",{timeOut:2000})
    }
  }
  getHired(){
    return this.hired
  }
}
