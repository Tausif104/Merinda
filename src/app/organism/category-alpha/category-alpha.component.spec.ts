import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAlphaComponent } from './category-alpha.component';

describe('CategoryAlphaComponent', () => {
  let component: CategoryAlphaComponent;
  let fixture: ComponentFixture<CategoryAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
