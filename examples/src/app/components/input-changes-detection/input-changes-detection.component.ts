import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChange } from '@angular/core';

declare class SimpleChangeGeneric<T = any> extends SimpleChange {
  previousValue: T;
  currentValue: T;
  firstChange: boolean;
  constructor(previousValue: T, currentValue: T, firstChange: boolean);
  isFirstChange(): boolean;
}

declare type SimpleChanges<C = any> = {
  [P in keyof C]: SimpleChangeGeneric<C[P]>;
};

@Component({
  selector: 'app-input-changes-detection',
  templateUrl: './input-changes-detection.component.html',
  styleUrls: ['./input-changes-detection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputChangesDetectionComponent implements OnInit, OnChanges {
  // Setter for   @Input() decorator helps you detect changes easy

  @Input()
  set userName(name: string | null) {
    console.log('name inside input was changed');
    if (name) {
      this.userFirstName = name;
    }
  }

  public userFirstName: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  // To avoid glitch effect you may wrap SimpleChanges interface to your custom generic
  // See more about glitch effect there:  https://en.wikipedia.org/wiki/Reactive_programming#Glitches or https://blog.strongbrew.io/combine-latest-glitch/

  ngOnChanges(changes: SimpleChanges<this>): void {
    changes.userName.currentValue;
  }
}
