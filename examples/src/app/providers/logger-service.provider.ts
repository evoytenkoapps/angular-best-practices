import { Provider } from '@angular/core';
import { LoggerService } from '../service/logger.service';
import { environment } from '../../environments/environment';
import { MyLoggerMockService } from '../service/my-logger-mock.service';
import { MyLoggerService } from '../service/my-logger.service';

export const LoggerServiceProvider: Provider = {
  provide: LoggerService,
  useValue: environment.isUseLogger ? new MyLoggerMockService() : new MyLoggerService(),
};
