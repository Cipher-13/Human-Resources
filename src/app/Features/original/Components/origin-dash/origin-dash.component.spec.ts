import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginDashComponent } from './origin-dash.component';

describe('OriginDashComponent', () => {
  let component: OriginDashComponent;
  let fixture: ComponentFixture<OriginDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OriginDashComponent]
    });
    fixture = TestBed.createComponent(OriginDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
