import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentCrudPage } from './student-crud.page';

describe('StudentCrudPage', () => {
  let component: StudentCrudPage;
  let fixture: ComponentFixture<StudentCrudPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
