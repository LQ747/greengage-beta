import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAlarmsComponent } from './user-alarms.component';

describe('UserAlarmsComponent', () => {
  let component: UserAlarmsComponent;
  let fixture: ComponentFixture<UserAlarmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAlarmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAlarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
