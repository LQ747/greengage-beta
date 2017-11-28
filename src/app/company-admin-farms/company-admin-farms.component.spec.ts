import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAdminFarmsComponent } from './company-admin-farms.component';

describe('CompanyAdminFarmsComponent', () => {
  let component: CompanyAdminFarmsComponent;
  let fixture: ComponentFixture<CompanyAdminFarmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAdminFarmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAdminFarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
