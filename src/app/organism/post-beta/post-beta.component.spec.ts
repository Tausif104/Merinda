import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBetaComponent } from './post-beta.component';

describe('PostBetaComponent', () => {
  let component: PostBetaComponent;
  let fixture: ComponentFixture<PostBetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostBetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
