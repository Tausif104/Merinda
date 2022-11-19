import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListAlphaComponent } from './post-list-alpha.component';

describe('PostListAlphaComponent', () => {
  let component: PostListAlphaComponent;
  let fixture: ComponentFixture<PostListAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListAlphaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
