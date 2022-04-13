import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAlphaComponent } from './author-alpha.component';

describe('AuthorAlphaComponent', () => {
  let component: AuthorAlphaComponent;
  let fixture: ComponentFixture<AuthorAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
