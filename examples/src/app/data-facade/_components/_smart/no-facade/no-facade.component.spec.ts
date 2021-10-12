import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFacadeComponent } from './no-facade.component';

describe('NoFacadeComponent', () => {
  let component: NoFacadeComponent;
  let fixture: ComponentFixture<NoFacadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoFacadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
