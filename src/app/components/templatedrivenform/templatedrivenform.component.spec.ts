import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedrivenformComponent } from './templatedrivenform.component';

describe('TemplatedrivenformComponent', () => {
  let component: TemplatedrivenformComponent;
  let fixture: ComponentFixture<TemplatedrivenformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatedrivenformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatedrivenformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
