import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbowdir]'
})
export class RainbowdirDirective {
  @HostBinding('style.color') color='blue'
  @HostBinding('style.borderColor') bordercolor='yellow'
  constructor() { }
  getRandomColor(){
    return '#'+ Math.floor(Math.random()*16777215).toString(16)
  }
  @HostListener('keyup') onKeyUp(){
    this.color=this.getRandomColor()
    this.bordercolor=this.getRandomColor()
  }
}
