import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCRUDpageComponent } from './test-crudpage.component';

describe('TestCRUDpageComponent', () => {
  let component: TestCRUDpageComponent;
  let fixture: ComponentFixture<TestCRUDpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCRUDpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCRUDpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
