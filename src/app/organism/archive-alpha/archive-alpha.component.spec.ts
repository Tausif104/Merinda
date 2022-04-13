import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveAlphaComponent } from './archive-alpha.component';

describe('ArchiveAlphaComponent', () => {
  let component: ArchiveAlphaComponent;
  let fixture: ComponentFixture<ArchiveAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
