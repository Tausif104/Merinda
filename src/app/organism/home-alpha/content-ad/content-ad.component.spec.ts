import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAdComponent } from './content-ad.component';

describe('ContentAdComponent', () => {
  let component: ContentAdComponent;
  let fixture: ComponentFixture<ContentAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
