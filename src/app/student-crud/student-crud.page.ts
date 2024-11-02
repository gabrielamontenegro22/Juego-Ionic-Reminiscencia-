import { Component, OnInit } from '@angular/core';
import { StudentService } from '../servicios/student.service';
@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.page.html',
  styleUrls: ['./student-crud.page.scss'],
})
export class StudentCrudPage implements OnInit {

  students: any[] = [];
  student = { name: '', email: '', phone: '', language: '' };
  editMode = false;
  selectedStudentId: number | null = null;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe((response) => {
      this.students = response.students;
    });
  }

  addStudent() {
    this.studentService.createStudent(this.student).subscribe(() => {
      this.loadStudents();
      this.resetForm();
    });
  }

  selectStudent(student: any) {
    this.editMode = true;
    this.selectedStudentId = student.id;
    this.student = { ...student };
  }

  updateStudent() {
    if (this.selectedStudentId) {
      this.studentService.updateStudent(this.selectedStudentId, this.student).subscribe(() => {
        this.loadStudents();
        this.resetForm();
      });
    }
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.loadStudents();
    });
  }

  resetForm() {
    this.student = { name: '', email: '', phone: '', language: '' };
    this.editMode = false;
    this.selectedStudentId = null;
  }
}