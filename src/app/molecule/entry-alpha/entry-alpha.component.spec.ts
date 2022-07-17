import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryAlphaComponent } from './entry-alpha.component';

describe('EntryAlphaComponent', () => {
  let component: EntryAlphaComponent;
  let fixture: ComponentFixture<EntryAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
