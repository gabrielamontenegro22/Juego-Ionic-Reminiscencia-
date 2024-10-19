import { Component } from '@angular/core';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.page.html',
  styleUrls: ['./salas.page.scss'],
})
export class SalasPage {
  

  rooms = [
    { name: 'Sala 1', id: '000' },
    { name: 'Sala 2', id: '001' }
  ];

  players = [
    { name: 'Jugador 1' },
    { name: 'Jugador 2' },
    { name: 'Jugador 3' },
    { name: 'Jugador 4' },
    { name: 'Jugador 5' },
    { name: 'Jugador 6' }
  ];
}
