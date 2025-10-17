import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio2 } from './portfolio2';

describe('Portfolio2', () => {
  let component: Portfolio2;
  let fixture: ComponentFixture<Portfolio2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portfolio2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portfolio2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
