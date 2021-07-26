import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoggerService } from '../../../service/logger.service';

@Component({
  selector: 'app-smart-dumb-concept',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartComponent implements OnInit {
  public smartData: number = 1;
  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {}

  public setData(data: number): void {
    this.loggerService.log('setData', data);
    this.smartData = data;
  }
}
