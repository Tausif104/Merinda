import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryEpsilonComponent } from './entry-epsilon.component';

describe('EntryEpsilonComponent', () => {
  let component: EntryEpsilonComponent;
  let fixture: ComponentFixture<EntryEpsilonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryEpsilonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryEpsilonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
