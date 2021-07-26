import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dumb-one',
  templateUrl: './dumb-one.component.html',
  styleUrls: ['./dumb-one.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DumbOneComponent implements OnInit {
  @Input() dataOne: number | null = null;
  @Output() dataOneChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public setData(data: number): void {
    this.dataOneChange.emit(data);
  }
}
