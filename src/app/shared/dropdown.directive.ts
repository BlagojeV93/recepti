import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.font-weight-bold') isOpen = false;

@HostListener('click') toggleBoldFont() {
  this.isOpen = !this.isOpen;
}

  constructor() { }

}
