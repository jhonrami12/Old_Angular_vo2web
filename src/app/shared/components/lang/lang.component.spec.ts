import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2vLangComponent } from './lang.component';

describe('LangComponent', () => {
  let component: V2vLangComponent;
  let fixture: ComponentFixture<V2vLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2vLangComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V2vLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
