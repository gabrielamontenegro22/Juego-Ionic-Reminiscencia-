import { Component, OnInit } from '@angular/core';

// Archivo JavaScript

@Component({
  selector: 'app-info-personaje',
  templateUrl: './info-personaje.page.html',
  styleUrls: ['./info-personaje.page.scss'],
})
export class InfoPersonajePage implements OnInit {

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
