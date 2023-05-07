import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2vPricingComponent } from './pricing.component';

describe('PricingComponent', () => {
  let component: V2vPricingComponent;
  let fixture: ComponentFixture<V2vPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2vPricingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V2vPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
