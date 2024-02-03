import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfo2Component } from './form-info2.component';

describe('FormInfo2Component', () => {
  let component: FormInfo2Component;
  let fixture: ComponentFixture<FormInfo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInfo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
