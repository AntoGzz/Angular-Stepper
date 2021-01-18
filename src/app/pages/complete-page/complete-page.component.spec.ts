import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompletePageComponent } from './complete-page.component';

describe('CompletePageComponent', () => {
  let component: CompletePageComponent;
  let fixture: ComponentFixture<CompletePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
