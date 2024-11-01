import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-personaje',
  templateUrl: './info-personaje.page.html',
  styleUrls: ['./info-personaje.page.scss'],
})
export class InfoPersonajePage implements OnInit {
  // Atributos del personaje
  attributes = [
    { name: 'Estamina', value: 50 },
    { name: 'Balance', value: 50 },
    { name: 'Resistencia', value: 50 },
    { name: 'Conocimiento', value: 50 },
    { name: 'F.Voluntad', value: 50 },
    { name: 'Carisma', value: 50 },
  ];

  // Lista de amigos
  friends = [
    { name: 'Drako', level: 0 },
    { name: 'Nombre Jugador', level: 0 },
    { name: 'Nombre Jugador', level: 0 },
  ];

  // Barras de vida, mana y equipamiento
  health = 0.8;
  mana = 0.6;
  equip = 0.5;

  constructor() {}

  ngOnInit() {}

  // Métodos para incrementar y decrementar atributos
  increment(attribute: { value: number }) {
    if (attribute.value < 100) {
      attribute.value += 1;
    }
  }

  decrement(attribute: { value: number }) {
    if (attribute.value > 0) {
      attribute.value -= 1;
    }
  }

  // Métodos para manejar la lista de amigos
  sendMessage(friend: { name: string }) {
    console.log('Enviar mensaje a:', friend.name);
  }

  removeFriend(friend: { name: string }) {
    console.log('Eliminar amigo:', friend.name);
  }

  // Métodos adicionales para manipular barras (opcional)
  adjustHealth(value: number) {
    this.health = Math.min(1, Math.max(0, this.health + value));
  }

  adjustMana(value: number) {
    this.mana = Math.min(1, Math.max(0, this.mana + value));
  }

  adjustEquip(value: number) {
    this.equip = Math.min(1, Math.max(0, this.equip + value));
  }
}
