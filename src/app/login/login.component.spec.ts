import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2vLoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: V2vLoginComponent;
  let fixture: ComponentFixture<V2vLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2vLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V2vLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
