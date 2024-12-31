import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToyListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ToyListComponent;
  let fixture: ComponentFixture<ToyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToyListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
