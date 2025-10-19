import { Component, inject, signal } from '@angular/core';
import { 
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormGroup } from '@angular/forms';

type Drama = {
  title: string;
  actor: string;
  genre: string;
  director: string;
  ostTitle: string;
}

@Component({
  selector: 'app-dramas',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './dramas.html',
  styleUrl: './dramas.scss'
})
export class Dramas {
  formBuilder = inject(FormBuilder);
  dramaForm: FormGroup;
  dramas: Drama[] = [];
  showFormError = signal(false);

  constructor() {
    this.dramaForm = this.formBuilder.group({
      title: ['', {
        validators: [Validators.required]
      }],
      actor: ['', {
        validators: [Validators.required]
      }],
      genre: ['', {
        validators: [Validators.required]
      }],
      director: ['', {
        validators: [Validators.required]
      }],
      ostTitle: ['', {
        validators: [Validators.required]
      }]
    });
  }

  addDrama() {
    if (this.dramaForm.valid) {
      this.dramas.push({...this.dramaForm.value});
      this.resetForm();
    } else {
      this.showFormError.set(true);
    }
  }

  resetForm() {
    this.dramaForm.reset();
    this.showFormError.set(false);
  }
}
