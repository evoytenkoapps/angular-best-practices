import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dumb-five',
  templateUrl: './dumb-five.component.html',
  styleUrls: ['./dumb-five.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DumbFiveComponent implements OnInit {
  @Input() dataFive: number | null = null;
  @Output() dataFiveChange: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  public changeData(): void {
    if (this.dataFive) {
      this.dataFiveChange.emit(++this.dataFive);
    }
  }
}
