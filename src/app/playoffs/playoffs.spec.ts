import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Playoffs } from './playoffs';

describe('Playoffs', () => {
  let component: Playoffs;
  let fixture: ComponentFixture<Playoffs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Playoffs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Playoffs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
