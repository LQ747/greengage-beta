import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmChartsComponent } from './farm-charts.component';

describe('FarmChartsComponent', () => {
  let component: FarmChartsComponent;
  let fixture: ComponentFixture<FarmChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
