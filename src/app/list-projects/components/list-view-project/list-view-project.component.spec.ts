import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2vListViewProjectComponent } from './list-view-project.component';

describe('ListViewProjectComponent', () => {
  let component: V2vListViewProjectComponent;
  let fixture: ComponentFixture<V2vListViewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2vListViewProjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V2vListViewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
