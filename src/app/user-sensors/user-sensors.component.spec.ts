import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSensorsComponent } from './user-sensors.component';

describe('UserSensorsComponent', () => {
  let component: UserSensorsComponent;
  let fixture: ComponentFixture<UserSensorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSensorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
