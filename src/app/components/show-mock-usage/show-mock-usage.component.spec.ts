import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMockUsageComponent } from './show-mock-usage.component';

describe('ShowMockUsageComponent', () => {
  let component: ShowMockUsageComponent;
  let fixture: ComponentFixture<ShowMockUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowMockUsageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMockUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
