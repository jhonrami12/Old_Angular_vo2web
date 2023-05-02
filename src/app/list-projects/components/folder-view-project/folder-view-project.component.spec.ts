import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderViewProjectComponent } from './folder-view-project.component';

describe('FolderViewProjectComponent', () => {
  let component: FolderViewProjectComponent;
  let fixture: ComponentFixture<FolderViewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderViewProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderViewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
