import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2vListProjectsComponent } from './list-projects.component';

describe('V2vListProjectsComponent', () => {
  let component: V2vListProjectsComponent;
  let fixture: ComponentFixture<V2vListProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2vListProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V2vListProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
