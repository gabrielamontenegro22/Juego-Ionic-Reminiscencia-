import { Component, OnInit } from '@angular/core';
import { StudentService } from '../servicios/student.service';
@Component({
  selector: 'app-salas',
  templateUrl: './salas.page.html',
  styleUrls: ['./salas.page.scss'],
})
export class SalasPage implements OnInit {
  rooms = [
    { name: 'Sala 1', id: '000' },
    { name: 'Sala 2', id: '001' }
  ];

  players: { id: string; name: string }[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers() {
    this.studentService.getStudents().subscribe(
      (data) => {
        // Asegúrate de que el objeto devuelto contiene 'email'
        this.players = data.students.map((student: any) => ({
          id: student.id,
          name: student.name // Usa el email en lugar del nombre
        }));
      },
      (error) => {
        console.error('Error al cargar los jugadores:', error);
      }
    );
  }
}