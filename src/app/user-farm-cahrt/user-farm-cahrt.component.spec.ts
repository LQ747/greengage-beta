import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFarmCahrtComponent } from './user-farm-cahrt.component';

describe('UserFarmCahrtComponent', () => {
  let component: UserFarmCahrtComponent;
  let fixture: ComponentFixture<UserFarmCahrtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFarmCahrtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFarmCahrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
