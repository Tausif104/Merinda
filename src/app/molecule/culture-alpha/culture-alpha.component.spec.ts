import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureAlphaComponent } from './culture-alpha.component';

describe('CultureAlphaComponent', () => {
  let component: CultureAlphaComponent;
  let fixture: ComponentFixture<CultureAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CultureAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
