import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-property-change',
  templateUrl: './property-change.component.html',
  styleUrls: ['./property-change.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyChangeComponent implements OnInit {
  public userName: string | null = null;
  constructor() {}

  ngOnInit(): void {}
}
