import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba3',
  templateUrl: './prueba3.page.html',
  styleUrls: ['./prueba3.page.scss'],
})
export class Prueba3Page{

  fuerza: number = 50; // Valor inicial del rango en el medio
  magia: number = 50;  // Valor inicial de magia, complementario a fuerza

  constructor() {
    this.calcularMagia();
  }

  calcularMagia(): void {
    this.magia = 100 - this.fuerza;
  }
}
