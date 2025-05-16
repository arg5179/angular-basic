import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderroutingComponent } from './headerrouting.component';

describe('HeaderroutingComponent', () => {
  let component: HeaderroutingComponent;
  let fixture: ComponentFixture<HeaderroutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderroutingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
