import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpReviewsComponent } from './emp-reviews.component';

describe('EmpReviewsComponent', () => {
  let component: EmpReviewsComponent;
  let fixture: ComponentFixture<EmpReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpReviewsComponent]
    });
    fixture = TestBed.createComponent(EmpReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
