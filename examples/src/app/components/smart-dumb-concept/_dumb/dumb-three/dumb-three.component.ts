import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dumb-three',
  templateUrl: './dumb-three.component.html',
  styleUrls: ['./dumb-three.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DumbThreeComponent implements OnInit {
  @Input() dataThree: number | null = null;
  @Output() dataThreeChange: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  public setData(data: number): void {
    this.dataThreeChange.emit(data);
  }
}
