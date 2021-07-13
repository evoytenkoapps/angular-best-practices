import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-change-detection-by-default',
  templateUrl: './change-detection-by-default.component.html',
  styleUrls: ['./change-detection-by-default.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// Пример создания компонента со стратегией OnPush через ng g c по правилу angular.json
// "@schematics/angular:component": {
//   "displayBlock": true,
//     "changeDetection": "OnPush"
// }
export class ChangeDetectionByDefaultComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
