import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzBuzzControlFormComponent } from './fizz-buzz-control-form.component';

describe('FizzBuzzControlFormComponent', () => {
  let component: FizzBuzzControlFormComponent;
  let fixture: ComponentFixture<FizzBuzzControlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FizzBuzzControlFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FizzBuzzControlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
