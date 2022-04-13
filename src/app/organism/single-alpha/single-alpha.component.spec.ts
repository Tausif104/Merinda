import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAlphaComponent } from './single-alpha.component';

describe('SingleAlphaComponent', () => {
  let component: SingleAlphaComponent;
  let fixture: ComponentFixture<SingleAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
