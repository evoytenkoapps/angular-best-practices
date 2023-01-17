import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpProxyExampleComponent } from './http-proxy-example.component';

describe('HttpProxyExampleComponent', () => {
  let component: HttpProxyExampleComponent;
  let fixture: ComponentFixture<HttpProxyExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpProxyExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpProxyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
