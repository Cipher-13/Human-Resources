import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressCategoriesComponent } from './progress-categories.component';

describe('ProgressCategoriesComponent', () => {
  let component: ProgressCategoriesComponent;
  let fixture: ComponentFixture<ProgressCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressCategoriesComponent]
    });
    fixture = TestBed.createComponent(ProgressCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
