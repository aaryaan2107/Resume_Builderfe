import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfo5Component } from './form-info5.component';

describe('FormInfo5Component', () => {
  let component: FormInfo5Component;
  let fixture: ComponentFixture<FormInfo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInfo5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInfo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
