import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MyLoggerMockService extends LoggerService {
  log(): void {
    console.log('MyLoggerMockService');
  }
}
