import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbTwoComponent } from './dumb-two.component';

describe('DumbTwoComponent', () => {
  let component: DumbTwoComponent;
  let fixture: ComponentFixture<DumbTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumbTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
