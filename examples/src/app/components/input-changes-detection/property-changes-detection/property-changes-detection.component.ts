import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChange } from '@angular/core';

declare class SimpleChangeGeneric<T = any> extends SimpleChange {
  previousValue: T;
  currentValue: T;
  firstChange: boolean;
  constructor(previousValue: T, currentValue: T, firstChange: boolean);
  isFirstChange(): boolean;
}

declare type CustomSimpleChanges<T = any> = {
  [P in keyof T]: SimpleChangeGeneric<T[P]>;
};

@Component({
  selector: 'app-property-changes-detection',
  templateUrl: './property-changes-detection.component.html',
  styleUrls: ['./property-changes-detection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyChangesDetectionComponent implements OnInit, OnChanges {
  // Setter for   @Input() decorator helps you to detect changes easy

  @Input()
  set userName(name: string | null) {
    console.log('name inside input was changed', name);
    if (name) {
      this.firstName = name;
    }
  }

  public firstName: string = '';

  constructor() {}

  ngOnInit(): void {}

  // To avoid glitch effect you have to use OnChanges
  // For typesafe usage of OnChanges you may wrap SimpleChanges interface to custom generic, see above.
  // See more about glitch effect there:  https://en.wikipedia.org/wiki/Reactive_programming#Glitches or https://blog.strongbrew.io/combine-latest-glitch/

  ngOnChanges(changes: CustomSimpleChanges<this>): void {
    const name: string | null = changes.userName.currentValue;
    console.log('name inside ngOnChanges was changed', name);
    if (name) {
      this.firstName = name;
    }
  }
}
