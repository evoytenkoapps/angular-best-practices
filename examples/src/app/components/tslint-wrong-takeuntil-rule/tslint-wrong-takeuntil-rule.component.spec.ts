import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TslintWrongTakeuntilRuleComponent } from './tslint-wrong-takeuntil-rule.component';

describe('TslintWrongTakeuntilRuleComponent', () => {
  let component: TslintWrongTakeuntilRuleComponent;
  let fixture: ComponentFixture<TslintWrongTakeuntilRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TslintWrongTakeuntilRuleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TslintWrongTakeuntilRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
