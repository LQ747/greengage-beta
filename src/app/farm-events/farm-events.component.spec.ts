import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmEventsComponent } from './farm-events.component';

describe('FarmEventsComponent', () => {
  let component: FarmEventsComponent;
  let fixture: ComponentFixture<FarmEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
