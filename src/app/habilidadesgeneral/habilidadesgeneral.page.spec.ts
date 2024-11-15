import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabilidadesgeneralPage } from './habilidadesgeneral.page';

describe('HabilidadesgeneralPage', () => {
  let component: HabilidadesgeneralPage;
  let fixture: ComponentFixture<HabilidadesgeneralPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesgeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
