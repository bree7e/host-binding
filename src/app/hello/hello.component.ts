// tslint:disable:use-host-property-decorator
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<p>hello</p>`,
  styles: [`:host(.some-class) { color: red; }`],
  host: {
    '[attr.role]': 'role',
    '(mouseenter)': 'onMouseEnter()',
    '[class.some-class]': 'someField',
    'style': 'display: inline-block;',
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
