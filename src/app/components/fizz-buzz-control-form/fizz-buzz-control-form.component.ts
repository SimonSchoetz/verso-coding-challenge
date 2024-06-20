import { Component } from '@angular/core';
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
  form: FormGroup<{ stop: FormControl }>;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      stop: ['', [Validators.required, Validators.pattern('stop')]],
    });

    this.form.valueChanges.subscribe((el) => {
      console.log(el);
    });
  }
  onSubmit($event: any): void {
    this.form.valid;
    console.log(this.form.valid, $event);
  }
}
