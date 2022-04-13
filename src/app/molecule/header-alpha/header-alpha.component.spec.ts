import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAlphaComponent } from './header-alpha.component';

describe('HeaderAlphaComponent', () => {
  let component: HeaderAlphaComponent;
  let fixture: ComponentFixture<HeaderAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
