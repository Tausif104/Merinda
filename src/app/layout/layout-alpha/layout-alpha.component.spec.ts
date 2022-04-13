import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAlphaComponent } from './layout-alpha.component';

describe('LayoutAlphaComponent', () => {
  let component: LayoutAlphaComponent;
  let fixture: ComponentFixture<LayoutAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
