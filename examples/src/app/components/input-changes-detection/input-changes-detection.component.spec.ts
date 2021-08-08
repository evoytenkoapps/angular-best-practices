import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChangesDetectionComponent } from './input-changes-detection.component';

describe('InputChangesDetectionComponent', () => {
  let component: InputChangesDetectionComponent;
  let fixture: ComponentFixture<InputChangesDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputChangesDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputChangesDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
