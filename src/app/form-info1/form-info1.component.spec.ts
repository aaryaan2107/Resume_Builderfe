import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfo1Component } from './form-info1.component';

describe('FormInfo1Component', () => {
  let component: FormInfo1Component;
  let fixture: ComponentFixture<FormInfo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInfo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
