import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2vHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: V2vHomeComponent;
  let fixture: ComponentFixture<V2vHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2vHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V2vHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
