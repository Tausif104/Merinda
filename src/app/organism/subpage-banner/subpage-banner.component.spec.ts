import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageBannerComponent } from './subpage-banner.component';

describe('SubpageBannerComponent', () => {
  let component: SubpageBannerComponent;
  let fixture: ComponentFixture<SubpageBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubpageBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubpageBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
