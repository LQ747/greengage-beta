import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTempComponent } from './action-temp.component';

describe('ActionTempComponent', () => {
  let component: ActionTempComponent;
  let fixture: ComponentFixture<ActionTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
