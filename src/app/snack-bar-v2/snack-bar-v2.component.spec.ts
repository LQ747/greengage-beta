import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarV2Component } from './snack-bar-v2.component';

describe('SnackBarV2Component', () => {
  let component: SnackBarV2Component;
  let fixture: ComponentFixture<SnackBarV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
