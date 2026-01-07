import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizesTypeComponent } from './prizes-type.component';

describe('PrizesTypeComponent', () => {
  let component: PrizesTypeComponent;
  let fixture: ComponentFixture<PrizesTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrizesTypeComponent]
    });
    fixture = TestBed.createComponent(PrizesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
