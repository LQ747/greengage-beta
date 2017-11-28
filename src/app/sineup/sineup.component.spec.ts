import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SineupComponent } from './sineup.component';

describe('SineupComponent', () => {
  let component: SineupComponent;
  let fixture: ComponentFixture<SineupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SineupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
