import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationAlphaComponent } from './pagination-alpha.component';

describe('PaginationAlphaComponent', () => {
  let component: PaginationAlphaComponent;
  let fixture: ComponentFixture<PaginationAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
