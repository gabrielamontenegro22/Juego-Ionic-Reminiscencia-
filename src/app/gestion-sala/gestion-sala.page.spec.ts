import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionSalaPage } from './gestion-sala.page';

describe('GestionSalaPage', () => {
  let component: GestionSalaPage;
  let fixture: ComponentFixture<GestionSalaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
