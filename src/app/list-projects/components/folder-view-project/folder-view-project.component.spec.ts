import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2vFolderViewProjectComponent } from './folder-view-project.component';

describe('FolderViewProjectComponent', () => {
  let component: V2vFolderViewProjectComponent;
  let fixture: ComponentFixture<V2vFolderViewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2vFolderViewProjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V2vFolderViewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
