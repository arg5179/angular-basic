import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicrountingComponent } from './basicrounting.component';

describe('BasicrountingComponent', () => {
  let component: BasicrountingComponent;
  let fixture: ComponentFixture<BasicrountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicrountingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicrountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
