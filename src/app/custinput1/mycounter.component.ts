/**
 * Created by tnguyen on 2016-10-31.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter-input',
  template: `
    <button (click)="increment()">+</button>
    <input type="text" value="{{counterValue}}"  [formControlName]="mycounter" >
    <button (click)="decrement()">-</button>
  `
})
export class MyCounterInputComponent {

  @Input()
  counterValue = 0;

  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }
}
