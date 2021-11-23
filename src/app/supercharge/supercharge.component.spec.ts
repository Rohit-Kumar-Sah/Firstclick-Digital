import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperchargeComponent } from './supercharge.component';

describe('SuperchargeComponent', () => {
  let component: SuperchargeComponent;
  let fixture: ComponentFixture<SuperchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperchargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
