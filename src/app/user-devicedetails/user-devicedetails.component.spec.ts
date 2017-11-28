import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDevicedetailsComponent } from './user-devicedetails.component';

describe('UserDevicedetailsComponent', () => {
  let component: UserDevicedetailsComponent;
  let fixture: ComponentFixture<UserDevicedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDevicedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDevicedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
