import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticTopComponent } from './static-top.component';

describe('StaticTopComponent', () => {
  let component: StaticTopComponent;
  let fixture: ComponentFixture<StaticTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
