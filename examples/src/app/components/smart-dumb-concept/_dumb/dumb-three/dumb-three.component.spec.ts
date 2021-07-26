import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbThreeComponent } from './dumb-three.component';

describe('DumbThreeComponent', () => {
  let component: DumbThreeComponent;
  let fixture: ComponentFixture<DumbThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumbThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
