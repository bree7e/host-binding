import { Component, OnInit, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-world',
  template: `<p>world!</p>`,
  styles: [`:host(.some-class) { color: blue; }`],
})
export class WorldComponent implements OnInit {
  @HostBinding('attr.role') role = 'note';
  @HostBinding('class') readonly field1 = 'one two three';          // вариант 1
  @HostBinding('style') readonly field2 = 'display: inline-block;'; // вместо readonly можно getter
  @HostBinding('class.some-class') someField = false;
  @HostBinding('class.another-class') true;                         // вариант 2
  @HostListener('mouseenter') onMouseEnter() {
    console.log('WorldComponent onMouseEnter');
  }

  ngOnInit() {
    setTimeout(() => {
      this.someField = true;
    }, 750);
  }
}
