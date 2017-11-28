import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SineinComponent } from './sinein.component';

describe('SineinComponent', () => {
  let component: SineinComponent;
  let fixture: ComponentFixture<SineinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SineinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SineinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
