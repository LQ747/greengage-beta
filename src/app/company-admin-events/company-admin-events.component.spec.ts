import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAdminEventsComponent } from './company-admin-events.component';

describe('CompanyAdminEventsComponent', () => {
  let component: CompanyAdminEventsComponent;
  let fixture: ComponentFixture<CompanyAdminEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAdminEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAdminEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
