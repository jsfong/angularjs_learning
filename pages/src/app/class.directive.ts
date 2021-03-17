import { Directive, ElementRef, Input } from '@angular/core';

//Custom proprety directive

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  //Constructor run when init, param might not be loaded
  constructor(private element: ElementRef) {}

  //Setter
  //Add or remove HTML class
  @Input('appClass') set classNames(classObj: any){
    for(let key in classObj){
      if(classObj[key]){
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }    
  }

}
