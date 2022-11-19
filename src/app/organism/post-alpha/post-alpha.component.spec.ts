import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAlphaComponent } from './post-alpha.component';

describe('PostAlphaComponent', () => {
  let component: PostAlphaComponent;
  let fixture: ComponentFixture<PostAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAlphaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
