import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UnsubscribeService extends Observable<void> implements OnDestroy {
  private readonly unsubscribe$ = new Subject<void>();

  constructor() {
    super((subscriber) => this.unsubscribe$.subscribe(subscriber));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
