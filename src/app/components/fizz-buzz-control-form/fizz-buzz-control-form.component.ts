import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-fizz-buzz-control-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './fizz-buzz-control-form.component.html',
  styleUrl: './fizz-buzz-control-form.component.scss',
})
export class FizzBuzzControlFormComponent {
  @Output() onFormSubmit = new EventEmitter<boolean>();

  form: FormGroup<{ stop: FormControl }>;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      stop: ['', [Validators.required, Validators.pattern('stop')]],
    });
  }

  handleSubmit(): void {
    this.onFormSubmit.emit(this.form.valid);
  }
}
