import { Injectable } from '@angular/core';
import { Observable, timer, take, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListGeneratorService {
  generateFizzBuzzListValues(): Observable<string> {
    return timer(0, 500).pipe(
      take(100),
      map((index) => {
        const num = index + 1;
        if (num % 3 === 0 && num % 5 === 0) {
          return 'FizzBuzz';
        } else if (num % 3 === 0) {
          return 'Fizz';
        } else if (num % 5 === 0) {
          return 'Buzz';
        } else {
          return num.toString();
        }
      })
    );
  }
}
