import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './display-block-by-default.html',
  styleUrls: ['./display-block-by-default.css'],
})
// Пример работы
//         "@schematics/angular:component": {
//           "displayBlock": true
//         }
export class DisplayBlockByDefaultComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
