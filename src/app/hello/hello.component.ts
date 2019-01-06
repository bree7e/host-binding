// tslint:disable:use-host-property-decorator
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<p>hello</p>`,
  styles: [`:host(.some-class) { color: red; }`],
  host: {
    '[attr.role]': 'role',
    '(mouseenter)': 'onMouseEnter()',
    'class': 'some-class'
  }
})
export class HelloComponent implements OnInit {
  role = 'note';
  someField = false;

  ngOnInit() {
    this.someField = true;
  }

  onMouseEnter() {
    console.log('onMouseEnter');
  }
}
