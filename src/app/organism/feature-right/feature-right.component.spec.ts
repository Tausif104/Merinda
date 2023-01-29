import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureRightComponent } from './feature-right.component';

describe('FeatureRightComponent', () => {
  let component: FeatureRightComponent;
  let fixture: ComponentFixture<FeatureRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
