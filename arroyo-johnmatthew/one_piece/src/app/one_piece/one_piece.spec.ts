import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePiece } from './one_piece';

describe('OnePiece', () => {
  let component: OnePiece;
  let fixture: ComponentFixture<OnePiece>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnePiece]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnePiece);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
