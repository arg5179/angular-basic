import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallAPIComponent } from './call-api.component';

describe('CallAPIComponent', () => {
  let component: CallAPIComponent;
  let fixture: ComponentFixture<CallAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
