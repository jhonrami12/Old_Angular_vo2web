import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2vDocumentationComponent } from './documentation.component';

describe('DocumentationComponent', () => {
  let component: V2vDocumentationComponent;
  let fixture: ComponentFixture<V2vDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2vDocumentationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V2vDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
