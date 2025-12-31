import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceCashComponent } from './advance-cash.component';

describe('AdvanceCashComponent', () => {
  let component: AdvanceCashComponent;
  let fixture: ComponentFixture<AdvanceCashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvanceCashComponent]
    });
    fixture = TestBed.createComponent(AdvanceCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
