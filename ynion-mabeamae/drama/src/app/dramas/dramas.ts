import { Component, inject } from '@angular/core';
import { 
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormGroup } from '@angular/forms';

interface Drama {
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
      title: ['', [Validators.required, Validators.maxLength(100)]],
      actor: ['', [Validators.required, Validators.maxLength(50)]],
      genre: ['', [Validators.required, Validators.maxLength(30)]],
      director: ['', [Validators.required, Validators.maxLength(50)]],
      ostTitle: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  addDrama() {
    if (this.dramaForm.valid) {
      this.dramas.push({ ...this.dramaForm.value });
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
