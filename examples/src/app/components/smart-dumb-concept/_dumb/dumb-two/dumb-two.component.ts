import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dumb-two',
  templateUrl: './dumb-two.component.html',
  styleUrls: ['./dumb-two.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DumbTwoComponent implements OnInit {
  @Input() dataTwo: number | null = null;
  @Output() dataTwoChange: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  public setData(data: number): void {
    this.dataTwoChange.emit(data);
  }
}
