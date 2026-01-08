import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitingComponent } from './quiting.component';

describe('QuitingComponent', () => {
  let component: QuitingComponent;
  let fixture: ComponentFixture<QuitingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuitingComponent]
    });
    fixture = TestBed.createComponent(QuitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
