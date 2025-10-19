import { Component, inject, signal } from '@angular/core';
import { 
    FormGroup, 
    FormBuilder, 
    Validators,
    ReactiveFormsModule 
  } from '@angular/forms';

type Character = {
  name: string;
  age: number;
  power: string;
  team: string;
  quote: string;
}

@Component({
  selector: 'app-marvel',
  imports: [ReactiveFormsModule],
  templateUrl: './marvel.html',
  styleUrl: './marvel.scss'
})
export class Marvel {
  characterForm: FormGroup;
  formBuilder = inject(FormBuilder);
  characters = signal(<Character[]>[]);
  isFormValid = signal(true);

  constructor() {
    this.characterForm = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      age: ['', {
        validators: [Validators.required]
      }],
      power: ['', {
        validators: [Validators.required]
      }],
      team: ['', {
        validators: [Validators.required]
      }],
      quote: ['', {
        validators: [Validators.required]
      }]
    });
  }

  checkFields() {
    if(this.characterForm.valid) {
      this.isFormValid.set(false);
    } else {
      this.isFormValid.set(true);
    }
  }

  addCharacter() {
    this.characters.set([...this.characters(), this.characterForm.value]);

    this.resetFields();
    this.isFormValid.set(true);
  }

  resetFields() {
    this.characterForm.get('name')?.setValue('');
    this.characterForm.get('age')?.setValue('');
    this.characterForm.get('power')?.setValue('');
    this.characterForm.get('team')?.setValue('');
    this.characterForm.get('quote')?.setValue('');
  }
}
