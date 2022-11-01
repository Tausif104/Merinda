import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAlphaComponent } from './page-alpha.component';

describe('PageAlphaComponent', () => {
  let component: PageAlphaComponent;
  let fixture: ComponentFixture<PageAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
