import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarUpdatedComponent } from './car-updated.component';

describe('CarUpdatedComponent', () => {
  let component: CarUpdatedComponent;
  let fixture: ComponentFixture<CarUpdatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarUpdatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
