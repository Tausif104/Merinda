import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageAlphaComponent } from './product-page-alpha.component';

describe('ProductPageAlphaComponent', () => {
  let component: ProductPageAlphaComponent;
  let fixture: ComponentFixture<ProductPageAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPageAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
