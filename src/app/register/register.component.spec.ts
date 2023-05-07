import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2vRegisterComponent } from './register.component';

describe('V2vRegisterComponent', () => {
  let component: V2vRegisterComponent;
  let fixture: ComponentFixture<V2vRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2vRegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V2vRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
