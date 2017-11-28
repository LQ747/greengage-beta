import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMeasurementComponent } from './set-measurement.component';

describe('SetMeasurementComponent', () => {
  let component: SetMeasurementComponent;
  let fixture: ComponentFixture<SetMeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetMeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
