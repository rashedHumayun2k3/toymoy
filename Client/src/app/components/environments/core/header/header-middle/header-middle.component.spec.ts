import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMiddleComponent } from './header-middle.component';

describe('HeaderMiddleComponent', () => {
  let component: HeaderMiddleComponent;
  let fixture: ComponentFixture<HeaderMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMiddleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
