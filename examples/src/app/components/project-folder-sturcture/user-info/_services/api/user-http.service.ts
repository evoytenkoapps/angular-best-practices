import { Observable } from 'rxjs';

export abstract class UserHttpService {
  public abstract getUer(): Observable<void>;
}
