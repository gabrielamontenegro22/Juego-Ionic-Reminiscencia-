import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotonesmPage } from './botonesm.page';

describe('BotonesmPage', () => {
  let component: BotonesmPage;
  let fixture: ComponentFixture<BotonesmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
