import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba3',
  templateUrl: './prueba3.page.html',
  styleUrls: ['./prueba3.page.scss'],
})
export class Prueba3Page{

  fuerza: number = 50; // Valor inicial del rango en el medio
  estamina: number = 50;  // Valor inicial de magia, complementario a fuerza
  balance: number = 50;
  
  resistencia: number = 50;
  conocimiento: number = 50;
  destreza: number = 50;

  Fvoluntad: number = 50;
  carisma: number = 50;
  construccion: number = 50;

  musculatura: number = 50;
  punteria: number =50;
  inteligencia: number = 50;

  salud: number = 50;
  logica: number =50;
  sabiduria: number = 50;

  intuicion: number = 50;
  verborrea: number =50;
  apariencia: number = 50;
  
  constructor() {
    this.calcularMagia();

  }

  calcularMagia(): void {
    this.estamina = 100 - this.fuerza;
    this.musculatura = 100 - this.estamina;
  }

  calcularDestreza(): void{
    this.resistencia = 100 - this.destreza;
    this.salud = 100 - this.resistencia;
  }

  calcularConstruccion(): void{
    this.Fvoluntad = 100 - this.construccion;
    this.intuicion = 100 - this.Fvoluntad;
  }

  calcularInteligencia(): void{
    this.balance = 100 -  this.inteligencia;
    this.punteria = 100 - this.balance;
  }

  calcularSabiduria(): void{
    this.conocimiento = 100 -  this.sabiduria;
    this.logica = 100 - this.conocimiento;
  }

  calcularApariencia(): void{
    this.carisma = 100 -  this.apariencia;
    this.verborrea = 100 - this.carisma
  }

}
