import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressLvlsComponent } from './progress-lvls.component';

describe('ProgressLvlsComponent', () => {
  let component: ProgressLvlsComponent;
  let fixture: ComponentFixture<ProgressLvlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressLvlsComponent]
    });
    fixture = TestBed.createComponent(ProgressLvlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
