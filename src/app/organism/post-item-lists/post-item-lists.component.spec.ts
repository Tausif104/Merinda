import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItemListsComponent } from './post-item-lists.component';

describe('PostItemListsComponent', () => {
  let component: PostItemListsComponent;
  let fixture: ComponentFixture<PostItemListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostItemListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostItemListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
