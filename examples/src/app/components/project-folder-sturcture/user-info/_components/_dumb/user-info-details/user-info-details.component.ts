import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-info-details',
  templateUrl: './user-info-details.component.html',
  styleUrls: ['./user-info-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
