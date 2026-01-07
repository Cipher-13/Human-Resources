import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingComponent } from './managing.component';

describe('ManagingComponent', () => {
  let component: ManagingComponent;
  let fixture: ComponentFixture<ManagingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagingComponent]
    });
    fixture = TestBed.createComponent(ManagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
