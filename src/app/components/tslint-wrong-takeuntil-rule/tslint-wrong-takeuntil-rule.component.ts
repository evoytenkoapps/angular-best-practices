import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tslint-wrong-takeuntil-rule',
  templateUrl: './tslint-wrong-takeuntil-rule.component.html',
  styleUrls: ['./tslint-wrong-takeuntil-rule.component.css'],
})
export class TslintWrongTakeuntilRuleComponent implements OnInit, OnDestroy {
  subject: Subject<any> = new Subject();
  destroyer: Subject<any> = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.subject
      .asObservable()
      .pipe(
        // Пример кривой отписки для проверки tslint rule
        takeUntil(this.destroyer),
        tap((data) => console.log(data))
      )
      .subscribe((data) => console.log(data));

    this.subject.next('NEXT');
  }

  ngOnDestroy(): void {
    this.destroyer.next();
    this.destroyer.complete();
  }
}
