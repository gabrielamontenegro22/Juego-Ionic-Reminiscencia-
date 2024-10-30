import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  attributes = [
    { name: 'Estamina', value: 50 },
    { name: 'Balance', value: 50 },
    { name: 'Resistencia', value: 50 },
    { name: 'Conocimiento', value: 50 },
    { name: 'F.Voluntad', value: 50 },
    { name: 'Carisma', value: 50 },
  ];

  increment(attribute: { value: number; }) {
    if (attribute.value < 100) {
      attribute.value += 1;
    }
  }

  decrement(attribute: { value: number; }) {
    if (attribute.value > 0) {
      attribute.value -= 1;
    }
  }
}
