import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpService } from './http.service';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeService } from '../../service/unsubscribe.service';

@Component({
  selector: 'app-http-proxy-example',
  templateUrl: './http-proxy-example.component.html',
  styleUrls: ['./http-proxy-example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HttpProxyExampleComponent implements OnInit {
  constructor(private httpService: HttpService, private unsubscribeService: UnsubscribeService) {}

  ngOnInit(): void {
    this.httpService.getData().pipe(takeUntil(this.unsubscribeService)).subscribe();
  }
}
