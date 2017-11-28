import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDetailsForRealComponent } from './device-details-for-real.component';

describe('DeviceDetailsForRealComponent', () => {
  let component: DeviceDetailsForRealComponent;
  let fixture: ComponentFixture<DeviceDetailsForRealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceDetailsForRealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDetailsForRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
