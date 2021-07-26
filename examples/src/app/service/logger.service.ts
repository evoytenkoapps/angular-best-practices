import { Injectable } from '@angular/core';

@Injectable()
export abstract class LoggerService {
  public abstract log(...args: any): void;
}
