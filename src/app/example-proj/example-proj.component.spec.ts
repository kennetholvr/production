import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleProjComponent } from './example-proj.component';

describe('ExampleProjComponent', () => {
  let component: ExampleProjComponent;
  let fixture: ComponentFixture<ExampleProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
