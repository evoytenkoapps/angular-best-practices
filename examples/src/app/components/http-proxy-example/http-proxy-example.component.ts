import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-http-proxy-example',
  templateUrl: './http-proxy-example.component.html',
  styleUrls: ['./http-proxy-example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HttpProxyExampleComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getData();
  }
}
