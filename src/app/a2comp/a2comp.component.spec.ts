import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A2compComponent } from './a2comp.component';

describe('A2compComponent', () => {
  let component: A2compComponent;
  let fixture: ComponentFixture<A2compComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A2compComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A2compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
