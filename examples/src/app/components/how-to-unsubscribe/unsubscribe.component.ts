import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { interval, ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeService } from '../../service/unsubscribe.service';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService],
})
export class UnsubscribeComponent implements OnInit, OnDestroy {
  private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  constructor(private unsubscribeService: UnsubscribeService) {}

  ngOnInit(): void {
    // First example
    interval(1000).pipe(takeUntil(this.destroy$)).subscribe();

    // Second example
    interval(1000).pipe(takeUntil(this.unsubscribeService)).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
