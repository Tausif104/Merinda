import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAlphaComponent } from './search-alpha.component';

describe('SearchAlphaComponent', () => {
  let component: SearchAlphaComponent;
  let fixture: ComponentFixture<SearchAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
