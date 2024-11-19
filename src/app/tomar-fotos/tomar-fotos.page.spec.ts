import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TomarFotosPage } from './tomar-fotos.page';

describe('TomarFotosPage', () => {
  let component: TomarFotosPage;
  let fixture: ComponentFixture<TomarFotosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TomarFotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
