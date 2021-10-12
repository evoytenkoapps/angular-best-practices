import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animals } from '../../_models/animals';

@Injectable()
export abstract class AnimalHttpService {
  abstract getAnimals(): Observable<string[]>;
}
