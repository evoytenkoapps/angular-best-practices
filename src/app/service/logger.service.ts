import { Injectable } from '@angular/core';

@Injectable()
export abstract class LoggerService {
  public abstract log(): void;
}
