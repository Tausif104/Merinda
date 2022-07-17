import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryBetaComponent } from './entry-beta.component';

describe('EntryBetaComponent', () => {
  let component: EntryBetaComponent;
  let fixture: ComponentFixture<EntryBetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryBetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
