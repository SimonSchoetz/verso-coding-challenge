import { Injectable } from '@angular/core';
import { Observable, take, map, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListGeneratorService {
  private isDividableBy(divisor: number, num: number): boolean {
    return num % divisor === 0;
  }

  private getFizzBuzzListContentAtThree(): string {
    return 'Fizz';
  }

  private getFizzBuzzListContentAtFive(): string {
    return 'Buzz';
  }

  public generateFizzBuzzListValues(): Observable<string> {
    return interval(500).pipe(
      take(100),
      map((index) => {
        const num = index + 1;

        let content = '';

        if (this.isDividableBy(3, num)) {
          content += this.getFizzBuzzListContentAtThree();
        }
        if (this.isDividableBy(5, num)) {
          content += this.getFizzBuzzListContentAtFive();
        }

        return content || num.toString();
      })
    );
  }
}
