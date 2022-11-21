import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAlphaComponent } from './login-alpha.component';

describe('LoginAlphaComponent', () => {
  let component: LoginAlphaComponent;
  let fixture: ComponentFixture<LoginAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAlphaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
