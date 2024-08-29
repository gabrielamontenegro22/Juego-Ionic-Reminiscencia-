import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.page.html',
  styleUrls: ['./detalle-personaje.page.scss'],
})
export class DetallePersonajePage implements OnInit {
  personaje: any;

  constructor(private router: Router) {
    this.personaje = this.router.getCurrentNavigation()?.extras.state?.['personaje'];
  }

  ngOnInit() {}

  guardarCambios() {
    console.log('Cambios guardados:', this.personaje);
    // Aquí puedes guardar las modificaciones en localStorage o en una base de datos
  }
}