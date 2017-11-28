import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarUserComponent } from './snack-bar-user.component';

describe('SnackBarUserComponent', () => {
  let component: SnackBarUserComponent;
  let fixture: ComponentFixture<SnackBarUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
