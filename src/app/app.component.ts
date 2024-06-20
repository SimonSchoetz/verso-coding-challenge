import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { ListGeneratorService } from './services';
import {
  FizzBuzzControlFormComponent,
  ListContainerComponent,
} from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FizzBuzzControlFormComponent, ListContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'verso-code-challenge';
  subscription?: Subscription;

  listItems: string[] = [];

  constructor(private listGeneratorService: ListGeneratorService) {}

  ngOnInit(): void {
    this.startFizzBuzzListGenerator();
  }

  startFizzBuzzListGenerator(): void {
    this.subscription = this.listGeneratorService
      .generateFizzBuzzListValues()
      .subscribe((value) => {
        this.listItems.push(value);
      });
  }

  stopFuzzBuzzListGenerator(): void {
    this.subscription?.unsubscribe();
  }

  handleFormSubmit(valid: boolean): void {
    if (valid) {
      this.stopFuzzBuzzListGenerator();
    }
  }
}
