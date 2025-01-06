import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticBottomComponent } from './static-bottom.component';

describe('StaticBottomComponent', () => {
  let component: StaticBottomComponent;
  let fixture: ComponentFixture<StaticBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticBottomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
