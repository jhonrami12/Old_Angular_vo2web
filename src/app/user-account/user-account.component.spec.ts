import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2vUserAccountComponent } from './user-account.component';

describe('UserAccountComponent', () => {
  let component: V2vUserAccountComponent;
  let fixture: ComponentFixture<V2vUserAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2vUserAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V2vUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
