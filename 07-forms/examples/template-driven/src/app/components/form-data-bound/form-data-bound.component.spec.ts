import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataBoundComponent } from './form-data-bound.component';

describe('FormDataBoundComponent', () => {
  let component: FormDataBoundComponent;
  let fixture: ComponentFixture<FormDataBoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDataBoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDataBoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
