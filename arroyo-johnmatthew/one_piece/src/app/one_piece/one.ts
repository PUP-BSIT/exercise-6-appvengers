import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-one',
  imports: [ReactiveFormsModule],
  templateUrl: './one.html',
  styleUrl: './one.scss'
})

export class OnePiece {
  formBuilder = inject(FormBuilder);
  onePieceForm: FormGroup;
  entries = signal<OnePieceEntry[]>([]);

  constructor() {
    this.onePieceForm = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required],
        updateOn: 'blur'
      }],
      age: ['', {
        validators: [Validators.required, Validators.min(1)],
        updateOn: 'blur'
      }],
      power: this.formBuilder.group({
        devilFruit: [false],
        swordStyle: [false],
        fightingStyle: [false],
        dayToDaySkill: [false]
      }),
      position: ['', {
        validators: [Validators.required],
        updateOn: 'blur'
      }],
      catchphrase: ['']
    })
  }

  handleAdd(): void {
    if (this.onePieceForm.valid) {
      const entry: OnePieceEntry = this.onePieceForm.getRawValue();
      this.entries.update(list => [...list, entry]);
      this.onePieceForm.reset();
    } else {
      this.onePieceForm.markAllAsTouched();
    }
  }
    
  get nameControl() {
    return this.onePieceForm.get('name')!;
  }

  get ageControl() {
    return this.onePieceForm.get('age')!;
  }

  get positionControl() {
    return this.onePieceForm.get('position')!;
  }

  get powerControl() {
    return this.onePieceForm.get('power') as FormGroup;
  }
}

export type OnePieceEntry = {
  name: string;
  age: number;
  power: {
    devilFruit: boolean;
    swordStyle: boolean;
    fightingStyle: boolean;
    dayToDaySkill: boolean;
  };
  position: string;
  catchphrase?: string;
};
