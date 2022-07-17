import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryGammaComponent } from './entry-gamma.component';

describe('EntryGammaComponent', () => {
  let component: EntryGammaComponent;
  let fixture: ComponentFixture<EntryGammaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryGammaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryGammaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
