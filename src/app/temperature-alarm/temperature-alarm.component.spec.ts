import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureAlarmComponent } from './temperature-alarm.component';

describe('TemperatureAlarmComponent', () => {
  let component: TemperatureAlarmComponent;
  let fixture: ComponentFixture<TemperatureAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureAlarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
