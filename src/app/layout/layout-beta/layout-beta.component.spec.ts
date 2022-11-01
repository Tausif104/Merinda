import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBetaComponent } from './layout-beta.component';

describe('LayoutBetaComponent', () => {
  let component: LayoutBetaComponent;
  let fixture: ComponentFixture<LayoutBetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutBetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
