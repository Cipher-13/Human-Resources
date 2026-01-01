import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetsTypesComponent } from './targets-types.component';

describe('TargetsTypesComponent', () => {
  let component: TargetsTypesComponent;
  let fixture: ComponentFixture<TargetsTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TargetsTypesComponent]
    });
    fixture = TestBed.createComponent(TargetsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
