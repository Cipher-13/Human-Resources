import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilitiesComponent } from './accessibilities.component';

describe('AccessibilitiesComponent', () => {
  let component: AccessibilitiesComponent;
  let fixture: ComponentFixture<AccessibilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessibilitiesComponent]
    });
    fixture = TestBed.createComponent(AccessibilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
