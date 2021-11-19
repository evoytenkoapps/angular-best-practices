import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShowRoomComponent } from './dialog-show-room.component';

describe('DialogShowRoomComponent', () => {
  let component: DialogShowRoomComponent;
  let fixture: ComponentFixture<DialogShowRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogShowRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogShowRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
