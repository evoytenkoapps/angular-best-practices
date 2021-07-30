import { UserHttpService } from './user-http.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class UserHttpProdService extends UserHttpService {
  constructor(private readonly http: HttpClient) {
    super();
  }
  getUer(): Observable<void> {
    return of();
  }
}
