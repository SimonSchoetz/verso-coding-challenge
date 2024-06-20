import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { ListGeneratorService } from './services';
import { FizzBuzzControlFormComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FizzBuzzControlFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'verso-code-challenge';
  subscription?: Subscription;

  constructor(private listGeneratorService: ListGeneratorService) {}

  ngOnInit(): void {
    this.startFizzBuzzListGenerator();
  }

  startFizzBuzzListGenerator(): void {
    this.subscription = this.listGeneratorService
      .generateFizzBuzzListValues()
      .pipe(take(15))
      .subscribe((value) => {
        console.log('>>>>>>>>> | .subscribe | value:', value);
      });
  }
}
