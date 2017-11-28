import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRealDeviceDetailsComponent } from './user-real-device-details.component';

describe('UserRealDeviceDetailsComponent', () => {
  let component: UserRealDeviceDetailsComponent;
  let fixture: ComponentFixture<UserRealDeviceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRealDeviceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRealDeviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
