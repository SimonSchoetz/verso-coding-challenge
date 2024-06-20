import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzBuzzControlFormComponent } from './fizz-buzz-control-form.component';

describe('FizzBuzzControlFormComponent', () => {
  let component: FizzBuzzControlFormComponent;
  let fixture: ComponentFixture<FizzBuzzControlFormComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FizzBuzzControlFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FizzBuzzControlFormComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('form', () => {
    it('should be invalid if stop input does not have value of "stop"', () => {
      component.form.get('stop')?.setValue('');
      expect(component.form.valid).toEqual(false);
    });
    it('should be valid if stop input has value of "stop"', () => {
      component.form.get('stop')?.setValue('stop');
      expect(component.form.valid).toEqual(true);
    });
  });

  describe('submitButton', () => {
    it('should be disabled if stop input does not have value of "stop"', () => {
      component.form.get('stop')?.setValue('');
      const submitButton: HTMLButtonElement = compiled.querySelector('button')!;
      expect(submitButton.disabled).toBeTrue();
    });

    it('should be enabled if stop input has value of "stop"', () => {
      component.form.get('stop')?.setValue('stop');
      fixture.detectChanges();
      const submitButton: HTMLButtonElement = compiled.querySelector('button')!;

      expect(submitButton.disabled).toBeFalse();
    });
  });
});
