import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2vBreadCrumbComponent } from './bread-crumb.component';

describe('BreadCrumbComponent', () => {
  let component: V2vBreadCrumbComponent;
  let fixture: ComponentFixture<V2vBreadCrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2vBreadCrumbComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V2vBreadCrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
