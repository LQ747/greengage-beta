import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanisFarmsComponent } from './companis-farms.component';

describe('CompanisFarmsComponent', () => {
  let component: CompanisFarmsComponent;
  let fixture: ComponentFixture<CompanisFarmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanisFarmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanisFarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
