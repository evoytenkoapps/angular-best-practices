import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MyLoggerService extends LoggerService {
  log(): void {
    console.log('MyLoggerService');
  }
}
