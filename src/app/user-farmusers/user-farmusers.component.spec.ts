import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFarmusersComponent } from './user-farmusers.component';

describe('UserFarmusersComponent', () => {
  let component: UserFarmusersComponent;
  let fixture: ComponentFixture<UserFarmusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFarmusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFarmusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
