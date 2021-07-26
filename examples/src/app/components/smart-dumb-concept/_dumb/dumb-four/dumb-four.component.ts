import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dumb-four',
  templateUrl: './dumb-four.component.html',
  styleUrls: ['./dumb-four.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DumbFourComponent implements OnInit {
  @Input() dataFour: number | null = null;
  @Output() dataFourChange: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  public setData(data: number): void {
    this.dataFourChange.emit(data);
  }
}
