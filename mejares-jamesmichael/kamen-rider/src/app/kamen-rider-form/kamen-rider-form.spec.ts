import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamenRiderForm } from './kamen-rider-form';

describe('KamenRiderForm', () => {
  let component: KamenRiderForm;
  let fixture: ComponentFixture<KamenRiderForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KamenRiderForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KamenRiderForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
