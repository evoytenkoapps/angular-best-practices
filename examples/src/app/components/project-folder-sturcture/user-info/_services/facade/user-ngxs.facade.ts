import { UserFacade } from './user.facade';
import { Observable, of } from 'rxjs';
import { Store } from '@ngxs/store';

export class UserNgxsFacade extends UserFacade {
  constructor(private store: Store) {
    super();
  }

  getUser(): Observable<void> {
    return of();
  }
}
