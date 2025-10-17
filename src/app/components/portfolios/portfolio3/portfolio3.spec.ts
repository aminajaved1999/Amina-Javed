import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio3 } from './portfolio3';

describe('Portfolio3', () => {
  let component: Portfolio3;
  let fixture: ComponentFixture<Portfolio3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portfolio3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portfolio3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
