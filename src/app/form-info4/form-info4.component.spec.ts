import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfo4Component } from './form-info4.component';

describe('FormInfo4Component', () => {
  let component: FormInfo4Component;
  let fixture: ComponentFixture<FormInfo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInfo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInfo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
