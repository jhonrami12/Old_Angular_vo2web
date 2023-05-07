import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2vHelpComponent } from './help.component';

describe('HelpsComponent', () => {
  let component: V2vHelpComponent;
  let fixture: ComponentFixture<V2vHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2vHelpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(V2vHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
