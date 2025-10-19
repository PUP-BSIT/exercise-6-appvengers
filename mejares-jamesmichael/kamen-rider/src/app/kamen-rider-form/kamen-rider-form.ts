import { Component, EventEmitter, Output } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

export enum KamenRiderEra {
  SHOWA = 'Showa',
  HEISEI = 'Heisei',
  REIWA = 'Reiwa',
}

export type KamenRider = {
  id: number;
  name: string;
  series: string;
  henshin: string;
  isProtagonist: boolean;
  era: KamenRiderEra;
};

@Component({
  selector: 'app-kamen-rider-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './kamen-rider-form.html',
  styleUrls: ['./kamen-rider-form.scss'],
})
export class KamenRiderFormComponent {
  // Properties at the top
  @Output() riderAdded = new EventEmitter<KamenRider>();

  riderForm: FormGroup;
  eraOptions = Object.values(KamenRiderEra);

  // Constructor with FormBuilder
  constructor(private formBuilder: FormBuilder) {
    this.riderForm = this.formBuilder.group({
      name: [
        '',
        {
          validators: [Validators.required, this.noWhitespaceValidator],
        },
      ],
      series: [
        '',
        {
          validators: [Validators.required, this.noWhitespaceValidator],
        },
      ],
      henshin: [
        '',
        {
          validators: [Validators.required, this.noWhitespaceValidator],
        },
      ],
      isProtagonist: [false],
      era: [
        KamenRiderEra.HEISEI,
        {
          validators: [Validators.required],
        },
      ],
    });
  }

  // Methods at the bottom
  onSubmit(): void {
    if (this.riderForm.valid) {
      const newRider: KamenRider = {
        id: Date.now(),
        name: this.riderForm.value.name,
        series: this.riderForm.value.series,
        henshin: this.riderForm.value.henshin,
        isProtagonist: this.riderForm.value.isProtagonist,
        era: this.riderForm.value.era,
      };

      this.riderAdded.emit(newRider);
      this.resetForm();
    }
  }

  resetForm(): void {
    this.riderForm.reset({
      name: '',
      series: '',
      henshin: '',
      isProtagonist: false,
      era: KamenRiderEra.HEISEI,
    });
  }

  // Validator - returns null or error object
  noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    return isWhitespace ? { whitespace: 'Field cannot be empty or whitespace' } 
      : null;
  }
}
