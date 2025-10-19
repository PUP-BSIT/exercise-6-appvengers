import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamenRiderList } from './kamen-rider-list';

describe('KamenRiderList', () => {
  let component: KamenRiderList;
  let fixture: ComponentFixture<KamenRiderList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KamenRiderList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KamenRiderList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
