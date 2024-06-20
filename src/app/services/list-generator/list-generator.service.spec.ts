import { TestBed } from '@angular/core/testing';
import { ListGeneratorService } from './list-generator.service';
import { take } from 'rxjs';

describe('ListGeneratorService', () => {
  let service: ListGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateFizzBuzzListValues', () => {
    it('should return Fizz when current interval number is dividable by 3', (done: DoneFn) => {
      const receivedValues: any[] = [];

      service
        .generateFizzBuzzListValues()
        .pipe(take(3))
        .subscribe((item) => {
          receivedValues.push(item);
          if (receivedValues.length === 3) {
            expect(receivedValues.at(-1)).toBe('Fizz');
            done();
          }
        });
    });

    it('should return Buzz when current interval number is dividable by 5', (done: DoneFn) => {
      const receivedValues: any[] = [];

      service
        .generateFizzBuzzListValues()
        .pipe(take(5))
        .subscribe((item) => {
          receivedValues.push(item);
          if (receivedValues.length === 5) {
            expect(receivedValues.at(-1)).toBe('Buzz');
            done();
          }
        });
    });

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500 * 16;
    it('should return FizzBuzz when current interval number is dividable by 3 and 5', (done: DoneFn) => {
      const receivedValues: any[] = [];

      service
        .generateFizzBuzzListValues()
        .pipe(take(15))
        .subscribe((item) => {
          receivedValues.push(item);
          if (receivedValues.length > 14) {
            expect(receivedValues.at(-1)).toBe('FizzBuzz');
            done();
          }
        });
    });
  });
});
