import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private element: ElementRef) {}

  /* #TA04
    - specify the property name to be used in the
      template in the Input decorater
      - this allows you to simplfy the syntax of 
        passing in property value to the directive
        in the template
        - [appClass] =  [appClass]="{active: true}"   
  */
  @Input('appClass') set classNames(classObj: any) {
    /* #TA05 */
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
