import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2vLoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: V2vLoadingComponent;
  let fixture: ComponentFixture<V2vLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2vLoadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V2vLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
