import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtionalDutyComponent } from './addtional-duty.component';

describe('AddtionalDutyComponent', () => {
  let component: AddtionalDutyComponent;
  let fixture: ComponentFixture<AddtionalDutyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddtionalDutyComponent]
    });
    fixture = TestBed.createComponent(AddtionalDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
