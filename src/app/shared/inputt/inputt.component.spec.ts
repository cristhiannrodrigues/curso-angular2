import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputtComponent } from './inputt.component';

describe('InputtComponent', () => {
  let component: InputtComponent;
  let fixture: ComponentFixture<InputtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputtComponent]
    });
    fixture = TestBed.createComponent(InputtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
