import { Component } from '@angular/core';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage {

  constructor() { }

  resetPassword() {
    // Aquí puedes agregar la lógica para restablecer la contraseña
    console.log('Función de restablecimiento de contraseña llamada');
  }
}
