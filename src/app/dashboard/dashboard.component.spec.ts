import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2vDashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: V2vDashboardComponent;
  let fixture: ComponentFixture<V2vDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2vDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V2vDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
