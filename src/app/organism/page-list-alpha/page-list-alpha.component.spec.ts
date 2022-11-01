import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListAlphaComponent } from './page-list-alpha.component';

describe('PageListAlphaComponent', () => {
  let component: PageListAlphaComponent;
  let fixture: ComponentFixture<PageListAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
