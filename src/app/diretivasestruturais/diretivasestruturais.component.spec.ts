import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasestruturaisComponent } from './diretivasestruturais.component';

describe('DiretivasestruturaisComponent', () => {
  let component: DiretivasestruturaisComponent;
  let fixture: ComponentFixture<DiretivasestruturaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivasestruturaisComponent]
    });
    fixture = TestBed.createComponent(DiretivasestruturaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
