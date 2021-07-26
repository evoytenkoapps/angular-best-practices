import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbFiveComponent } from './dumb-five.component';

describe('DumbFiveComponent', () => {
  let component: DumbFiveComponent;
  let fixture: ComponentFixture<DumbFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumbFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
