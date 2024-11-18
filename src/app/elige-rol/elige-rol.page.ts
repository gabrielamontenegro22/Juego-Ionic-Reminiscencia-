import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importar AlertController

@Component({
  selector: 'app-elige-rol',
  templateUrl: './elige-rol.page.html',
  styleUrls: ['./elige-rol.page.scss'],
})
export class EligeRolPage {
  userRole: string | null = '';

  constructor(
    private router: Router,
    private alertController: AlertController // Inyectar AlertController
  ) {
    this.userRole = localStorage.getItem('userRole');
    console.log('Rol actual del usuario:', this.userRole);
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  selectRole(role: string) {
    console.log('Rol seleccionado:', role);
    if (role === 'master' && this.userRole === 'master') {
      this.router.navigate(['/salas']);
    } else if (role === 'jugador' && this.userRole === 'player') {
      this.router.navigate(['/inicio']);
    } else {
      this.presentAlert('Acceso denegado', 'No tienes permiso para acceder a esta sección');
    }
  }
}
