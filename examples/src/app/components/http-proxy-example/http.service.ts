import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  public getData(): Observable<void> {
    return this.httpClient.get<void>('/data');
  }
}
