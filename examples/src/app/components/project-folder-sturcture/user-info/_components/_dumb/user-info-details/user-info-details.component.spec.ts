import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoDetailsComponent } from './user-info-details.component';

describe('UserInfoDetailsComponent', () => {
  let component: UserInfoDetailsComponent;
  let fixture: ComponentFixture<UserInfoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
