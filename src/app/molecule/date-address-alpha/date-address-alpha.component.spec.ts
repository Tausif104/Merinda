import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAddressAlphaComponent } from './date-address-alpha.component';

describe('DateAddressAlphaComponent', () => {
  let component: DateAddressAlphaComponent;
  let fixture: ComponentFixture<DateAddressAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateAddressAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateAddressAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
