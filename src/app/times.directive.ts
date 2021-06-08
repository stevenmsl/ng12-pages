import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    /*  #TA08
      - give you access to the element 
        that applies this directive
        - <ul *appTimes="5; let i = index;">  
    */
    private viewContainer: ViewContainerRef,
    /*
      - the content inside the element 
        you want to repeat
        -  <li>Hi there! {{i}}</li>
    */
    private templateRef: TemplateRef<any>
  ) {}

  /* #TA06
    - set the name to be the same as the
      selector appTimes
      - this allows you to use the syntax
        *appTimes="..." in the template
        like other built-in structural
        directives  
  */
  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      /* change the structure */
      this.viewContainer.createEmbeddedView(this.templateRef, {
        /* #TA07
          - set up context for aliasing
          - you add additional info here
            that can be accessed in the
            template 
        */
        index: i,
      });
    }
  }
}
