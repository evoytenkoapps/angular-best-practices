import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../service/logger.service';

@Component({
  selector: 'app-show-mock-usage',
  templateUrl: './show-mock-usage.component.html',
  styleUrls: ['./show-mock-usage.component.css'],
})
export class ShowMockUsageComponent implements OnInit {
  // Так не делаем
  private a?: number;

  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.logger.log();
  }
}
