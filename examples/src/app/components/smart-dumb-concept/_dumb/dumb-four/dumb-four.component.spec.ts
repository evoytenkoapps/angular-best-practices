import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbFourComponent } from './dumb-four.component';

describe('DumbFourComponent', () => {
  let component: DumbFourComponent;
  let fixture: ComponentFixture<DumbFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumbFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
