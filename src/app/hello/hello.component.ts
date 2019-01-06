// tslint:disable:use-host-property-decorator
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<p>hello</p>`,
  styles: [`:host(.some-class) { color: red; }`],
  host: {
    '[attr.role]': 'role',
    'class': 'one two three',         // вариант 1
    'style': 'display: inline-block;',
    '[class.some-class]': 'someField',
    '[class.another-class]': 'true',  // вариант 2
    '(mouseenter)': 'onMouseEnter()',
  }
})
export class HelloComponent implements OnInit {
  role = 'main';
  someField = false;

  ngOnInit() {
    setTimeout(() => {
      this.someField = true;
    }, 500);
  }

  onMouseEnter() {
    console.log('HelloComponent onMouseEnter');
  }
}
