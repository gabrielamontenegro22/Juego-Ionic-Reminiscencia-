import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  friends = [
    { name: 'Drako ', level: 0 },
    { name: 'Nombre Jugador', level: 0 },
    { name: 'Nombre Jugador', level: 0 }
  ];

  sendMessage(friend: { name: any; }) {
    console.log('Enviar mensaje a:', friend.name);
  }

  removeFriend(friend: { name: any; }) {
    console.log('Eliminar amigo:', friend.name);
  }

}
