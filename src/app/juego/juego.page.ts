import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
})
export class JuegoPage implements OnInit {

  numeroSecreto: number = 0;  // Número que el jugador debe adivinar
  numeroIngresado: number = 0; // Número ingresado por el jugador, con valor inicial
  intentos: number = 0; // Cantidad de intentos
  mensaje: string = ''; // Mensaje que muestra si el número es mayor o menor
  colorMensaje: string = ''; // Color del mensaje (verde si adivina, rojo si falla)

  constructor() { 
    this.reiniciar();
  }

  ngOnInit() {}

  adivinar() {
    this.intentos++;

    if (this.numeroIngresado < this.numeroSecreto) {
      this.mensaje = 'El número es mayor.';
      this.colorMensaje = 'danger'; // Rojo
    } else if (this.numeroIngresado > this.numeroSecreto) {
      this.mensaje = 'El número es menor.';
      this.colorMensaje = 'danger'; // Rojo
    } else {
      this.mensaje = `¡Acertaste! El número era ${this.numeroSecreto}. Lo lograste en ${this.intentos} intentos.`;
      this.colorMensaje = 'success'; // Verde
    }
  }

  reiniciar() {
    this.numeroSecreto = Math.floor(Math.random() * 100) + 1;
    this.numeroIngresado = 0; // Reiniciar el valor del número ingresado
    this.intentos = 0;
    this.mensaje = '';
  }
}
