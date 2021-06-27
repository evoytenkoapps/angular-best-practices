import { Component, OnInit } from '@angular/core';

interface ITrackItem {
  id: number;
  digit: number;
}

/**
 * Пример зачем нужен trackBy для ngFor
 */

@Component({
  selector: 'app-track-by-example',
  templateUrl: './track-by-example.component.html',
  styleUrls: ['./track-by-example.component.css'],
})
export class TrackByExampleComponent implements OnInit {
  public dataNoTrack: ITrackItem[] = [];
  public dataTrack: ITrackItem[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.dataNoTrack.push({ id: i, digit: Math.random() });
      this.dataTrack.push({ id: i, digit: Math.random() });
    }
  }

  public onCloneNoTrack(): void {
    this.dataNoTrack = this.dataNoTrack.map((item) => ({ ...item }));
  }

  public onCloneTrackBy(): void {
    this.dataTrack = this.dataTrack.map((item) => ({ ...item }));
  }

  public trackById(index: number, item: ITrackItem): number {
    return item.id;
  }
}
