import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticMiddleComponent } from './static-middle.component';

describe('StaticMiddleComponent', () => {
  let component: StaticMiddleComponent;
  let fixture: ComponentFixture<StaticMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticMiddleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
