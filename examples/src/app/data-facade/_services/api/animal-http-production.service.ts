import { Injectable } from '@angular/core';
import { AnimalHttpService } from './animal-http.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Routes } from '../../_models/routes';

@Injectable()
export class AnimalHttpProductionService extends AnimalHttpService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  getAnimals(): Observable<string[]> {
    return this.httpClient.get<string[]>('/' + Routes.ANIMAL);
  }
}
