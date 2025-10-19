import { Component, inject } from '@angular/core';
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
  showFormError = false;

  constructor() {
    this.dramaForm = this.formBuilder.group({
      title: ['', {
        validators: [Validators.required, Validators.maxLength(100)],
        updateOn: 'change'
      }],
      actor: ['', {
        validators: [Validators.required, Validators.maxLength(50)],
        updateOn: 'change'
      }],
      genre: ['', {
        validators: [Validators.required, Validators.maxLength(30)],
        updateOn: 'change'
      }],
      director: ['', {
        validators: [Validators.required, Validators.maxLength(50)],
        updateOn: 'change'
      }],
      ostTitle: ['', {
        validators: [Validators.required, Validators.maxLength(100)],
        updateOn: 'change'
      }]
    });
  }

  addDrama() {
    if (this.dramaForm.valid) {
      this.dramas.push({...this.dramaForm.value});
      this.resetForm();
    } else {
      this.showFormError = true;
    }
  }

  resetForm() {
    this.dramaForm.reset();
    this.showFormError = false;
  }
}
