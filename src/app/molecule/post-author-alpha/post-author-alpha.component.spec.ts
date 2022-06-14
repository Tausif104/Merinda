import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAuthorAlphaComponent } from './post-author-alpha.component';

describe('PostAuthorAlphaComponent', () => {
  let component: PostAuthorAlphaComponent;
  let fixture: ComponentFixture<PostAuthorAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAuthorAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAuthorAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
