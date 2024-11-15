import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignarsalaPage } from './asignarsala.page';

describe('AsignarsalaPage', () => {
  let component: AsignarsalaPage;
  let fixture: ComponentFixture<AsignarsalaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarsalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
