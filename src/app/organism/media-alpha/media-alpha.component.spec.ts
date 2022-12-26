import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAlphaComponent } from './media-alpha.component';

describe('MediaAlphaComponent', () => {
  let component: MediaAlphaComponent;
  let fixture: ComponentFixture<MediaAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaAlphaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
