import { Injectable } from '@angular/core';
import { AnimalHttpService } from './animal-http.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Routes } from '../../_models/routes';
import { DataWithStatus } from '../../_models/data-with-status';
import { StatusData } from '../../_models/status-data';
import { catchError, map, startWith } from 'rxjs/operators';

@Injectable()
export class AnimalHttpProductionService extends AnimalHttpService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  getAnimals(): Observable<DataWithStatus<string[]>> {
    return this.httpClient.get<string[]>('/' + Routes.ANIMAL).pipe(
      map((data) => ({ data: data, status: StatusData.LOADED } as DataWithStatus<string[]>)),
      startWith({ data: [], status: StatusData.LOADING } as DataWithStatus<string[]>),
      catchError((error) => of({ data: [], status: StatusData.ERROR } as DataWithStatus<string[]>))
    );
  }
}
