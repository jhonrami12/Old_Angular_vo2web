import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2vCardViewProjectComponent } from './card-view-project.component';

describe('V2vCardViewProjectComponent', () => {
  let component: V2vCardViewProjectComponent;
  let fixture: ComponentFixture<V2vCardViewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2vCardViewProjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V2vCardViewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
