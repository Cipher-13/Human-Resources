import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalsTypesComponent } from './originals-types.component';

describe('OriginalsTypesComponent', () => {
  let component: OriginalsTypesComponent;
  let fixture: ComponentFixture<OriginalsTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OriginalsTypesComponent]
    });
    fixture = TestBed.createComponent(OriginalsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
