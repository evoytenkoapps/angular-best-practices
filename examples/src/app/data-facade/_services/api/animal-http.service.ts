import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataWithStatus } from '../../_models/data-with-status';

@Injectable()
export abstract class AnimalHttpService {
  abstract getAnimals(): Observable<DataWithStatus<string[]>>;
}
