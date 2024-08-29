import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoVerdaderoPage } from './juego-verdadero.page';

describe('JuegoVerdaderoPage', () => {
  let component: JuegoVerdaderoPage;
  let fixture: ComponentFixture<JuegoVerdaderoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoVerdaderoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
