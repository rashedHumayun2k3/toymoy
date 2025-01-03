import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSaleProductsComponent } from './hot-sale-products.component';

describe('HotSaleProductsComponent', () => {
  let component: HotSaleProductsComponent;
  let fixture: ComponentFixture<HotSaleProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotSaleProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotSaleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
