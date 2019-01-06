import { Component, OnInit, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-world',
  template: `<p>world!</p>`,
  styles: [`:host(.some-class) { color: blue; }`],
})
export class WorldComponent implements OnInit {
  @HostBinding('attr.role') role = 'note';
  @HostBinding('class') readonly staticField1 = 'one two three';
  @HostBinding('style') readonly staticField2 = 'display: inline-block;';
  @HostBinding('class.some-class') someField = false;
  @HostListener('mouseenter') onMouseEnter() {
    console.log('WorldComponent onMouseEnter');
  }

  ngOnInit() {
    setTimeout(() => {
      this.someField = true;
    }, 750);
  }
}
