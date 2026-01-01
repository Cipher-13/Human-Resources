import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeMarkComponent } from './trade-mark.component';

describe('TradeMarkComponent', () => {
  let component: TradeMarkComponent;
  let fixture: ComponentFixture<TradeMarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradeMarkComponent]
    });
    fixture = TestBed.createComponent(TradeMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
