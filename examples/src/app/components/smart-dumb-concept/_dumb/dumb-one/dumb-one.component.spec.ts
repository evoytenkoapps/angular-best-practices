import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbOneComponent } from './dumb-one.component';

describe('DumbOneComponent', () => {
  let component: DumbOneComponent;
  let fixture: ComponentFixture<DumbOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumbOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
