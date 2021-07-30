import { UserHttpService } from './user-http.service';
import { Observable, of } from 'rxjs';

export class UserHttpProdService extends UserHttpService {
  getUer(): Observable<void> {
    return of();
  }
}
