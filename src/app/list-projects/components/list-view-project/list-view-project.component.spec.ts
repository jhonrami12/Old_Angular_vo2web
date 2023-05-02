import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewProjectComponent } from './list-view-project.component';

describe('ListViewProjectComponent', () => {
  let component: ListViewProjectComponent;
  let fixture: ComponentFixture<ListViewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListViewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
