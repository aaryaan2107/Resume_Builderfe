import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfo3Component } from './form-info3.component';

describe('FormInfo3Component', () => {
  let component: FormInfo3Component;
  let fixture: ComponentFixture<FormInfo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInfo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInfo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
