import { Observable } from 'rxjs';

export abstract class UserFacade {
  public abstract getUser(): Observable<void>;
}
