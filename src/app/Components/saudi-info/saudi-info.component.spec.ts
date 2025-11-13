import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudiInfoComponent } from './saudi-info.component';

describe('SaudiInfoComponent', () => {
  let component: SaudiInfoComponent;
  let fixture: ComponentFixture<SaudiInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaudiInfoComponent]
    });
    fixture = TestBed.createComponent(SaudiInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
