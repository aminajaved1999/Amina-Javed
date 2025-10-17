import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio4 } from './portfolio4';

describe('Portfolio4', () => {
  let component: Portfolio4;
  let fixture: ComponentFixture<Portfolio4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portfolio4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portfolio4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
