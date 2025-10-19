import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dramas } from './dramas';

describe('Dramas', () => {
  let component: Dramas;
  let fixture: ComponentFixture<Dramas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dramas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dramas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
