import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(image:string): string {
    if(image.trim()=='')
      return "assets/images/avatar3.png";
    return image
  }

}
