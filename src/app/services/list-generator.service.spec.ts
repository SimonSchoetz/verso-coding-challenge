import { TestBed } from '@angular/core/testing';

import { ListGeneratorService } from './list-generator.service';

describe('ListGeneratorService', () => {
  let service: ListGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
