import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOnceComponent } from './child-once.component';

describe('ChildOnceComponent', () => {
  let component: ChildOnceComponent;
  let fixture: ComponentFixture<ChildOnceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildOnceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOnceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
