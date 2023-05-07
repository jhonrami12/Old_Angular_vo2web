import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2vSpeedDialComponent } from './speed-dial.component';

describe('SpeedDialComponent', () => {
  let component: V2vSpeedDialComponent;
  let fixture: ComponentFixture<V2vSpeedDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2vSpeedDialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V2vSpeedDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
