import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarraVidaPage } from './barra-vida.page';

describe('BarraVidaPage', () => {
  let component: BarraVidaPage;
  let fixture: ComponentFixture<BarraVidaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraVidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
