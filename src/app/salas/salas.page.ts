import { Component, OnInit } from '@angular/core';
import { StudentService } from '../servicios/student.service';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.page.html',
  styleUrls: ['./salas.page.scss'],
})
export class SalasPage implements OnInit {
  rooms = [
    { name: 'Sala 1', id: '1' },
    { name: 'Sala 2', id: '2' }
  ];

  players: { id: string; name: string; salaId: string }[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers() {
    this.studentService.getStudents().subscribe(
      (data) => {
        this.players = data.students.map((student: any) => ({
          id: student.id,
          name: student.name,
        }));
      },
      (error) => {
        console.error('Error al cargar los jugadores:', error);
      }
    );
  }

  createRoom() {
    if (this.rooms.length < 2) {
      const newRoomId = (this.rooms.length + 1).toString();
      const newRoom = { name: `Sala ${newRoomId}`, id: newRoomId };
      this.rooms.push(newRoom);
    } else {
      console.log('Ya existen dos salas. No es posible crear más.');
    }
  }

  deleteRoom() {
    if (this.rooms.length > 0) {
      this.rooms.pop();
    }
  }
}
