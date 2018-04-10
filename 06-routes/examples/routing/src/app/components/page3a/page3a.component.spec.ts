import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3aComponent } from './page3a.component';

describe('Page3aComponent', () => {
  let component: Page3aComponent;
  let fixture: ComponentFixture<Page3aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page3aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
