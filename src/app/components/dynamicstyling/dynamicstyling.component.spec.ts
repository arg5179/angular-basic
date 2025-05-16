import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicstylingComponent } from './dynamicstyling.component';

describe('DynamicstylingComponent', () => {
  let component: DynamicstylingComponent;
  let fixture: ComponentFixture<DynamicstylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicstylingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicstylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
