import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContainerComponent } from './list-container.component';

describe('ListContainerComponent', () => {
  let component: ListContainerComponent;
  let fixture: ComponentFixture<ListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render list items', () => {
    component.listItems = ['1', '2', '3'];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('li:nth-child(1)')?.textContent).toContain(
      '1'
    );
    expect(compiled.querySelector('li:nth-child(2)')?.textContent).toContain(
      '2'
    );
    expect(compiled.querySelector('li:nth-child(3)')?.textContent).toContain(
      '3'
    );
  });
});
