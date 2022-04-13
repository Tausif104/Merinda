import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAlphaComponent } from './footer-alpha.component';

describe('FooterAlphaComponent', () => {
  let component: FooterAlphaComponent;
  let fixture: ComponentFixture<FooterAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
