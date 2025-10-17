import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio1 } from './portfolio1';

describe('Portfolio1', () => {
  let component: Portfolio1;
  let fixture: ComponentFixture<Portfolio1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portfolio1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portfolio1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
