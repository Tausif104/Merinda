import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlphaComponent } from './home-alpha.component';

describe('HomeAlphaComponent', () => {
  let component: HomeAlphaComponent;
  let fixture: ComponentFixture<HomeAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
