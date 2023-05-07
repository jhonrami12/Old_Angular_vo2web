import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2vQuestionsComponent } from './questions.component';

describe('QuestionsComponent', () => {
  let component: V2vQuestionsComponent;
  let fixture: ComponentFixture<V2vQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2vQuestionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V2vQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
