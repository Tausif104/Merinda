import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundAlphaComponent } from './not-found-alpha.component';

describe('NotFoundAlphaComponent', () => {
  let component: NotFoundAlphaComponent;
  let fixture: ComponentFixture<NotFoundAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
