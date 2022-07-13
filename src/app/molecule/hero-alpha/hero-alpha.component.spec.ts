import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAlphaComponent } from './hero-alpha.component';

describe('HeroAlphaComponent', () => {
  let component: HeroAlphaComponent;
  let fixture: ComponentFixture<HeroAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
