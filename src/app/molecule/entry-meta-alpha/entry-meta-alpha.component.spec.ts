import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryMetaAlphaComponent } from './entry-meta-alpha.component';

describe('EntryMetaAlphaComponent', () => {
  let component: EntryMetaAlphaComponent;
  let fixture: ComponentFixture<EntryMetaAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryMetaAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryMetaAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
