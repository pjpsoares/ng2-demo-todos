/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosInputComponent } from './todos-input.component';

describe('TodosInputComponent', () => {
  let component: TodosInputComponent;
  let fixture: ComponentFixture<TodosInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
