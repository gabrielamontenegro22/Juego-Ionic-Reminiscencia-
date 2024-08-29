import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego-verdadero',
  templateUrl: './juego-verdadero.page.html',
  styleUrls: ['./juego-verdadero.page.scss'],
})
export class JuegoVerdaderoPage implements OnInit {

  personajes = [
    { nombre: 'Personaje 1', imagen: 'assets/personajes/image.webp', fuerza: 10, velocidad: 8, inteligencia: 7 },
    { nombre: 'Personaje 2', imagen: 'assets/personajes/personaje1.png', fuerza: 6, velocidad: 9, inteligencia: 8 },
    // Agrega más personajes
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  seleccionarPersonaje(personaje: any) {
    this.router.navigate(['/detallePersonaje'], { state: { personaje } });
  }
}
 