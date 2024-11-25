import { Component, OnInit } from '@angular/core';
import { StudentService } from '../servicios/student.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer2',
  templateUrl: './restablecer2.page.html',
  styleUrls: ['./restablecer2.page.scss'],
})
export class Restablecer2Page implements OnInit {
  newPassword: string = '';
  confirmPassword: string = '';
  userId: number | null = null;

  constructor(
    private studentService: StudentService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // Obtener el ID del usuario desde el estado de navegación
    const navigation = this.router.getCurrentNavigation();
    this.userId = navigation?.extras?.state?.['userId'] || null;
  }

  async updatePassword() {
    if (!this.newPassword || !this.confirmPassword) {
      await this.showAlert('Error', 'Por favor, completa ambos campos de contraseña'); 
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      await this.showAlert('Error', 'Las contraseñas no coinciden');
      return;
    }

    if (!this.userId) {
      await this.showAlert('Error', 'Error al identificar al usuario. Intente nuevamente.');
      return;
    }

    this.studentService.updatePassword(this.userId, this.newPassword, this.confirmPassword).subscribe({
      next: async (response) => {
        console.log('Contraseña actualizada:', response);
        await this.showAlert('Éxito', 'Contraseña actualizada con éxito.');
        this.router.navigate(['/elige-rol']);
      },
      error: async (err) => {
        console.error('Error al actualizar contraseña:', err);
        await this.showAlert('Error', 'Error al actualizar la contraseña. Por favor, inténtelo de nuevo.');
      },
    });
  }

  async showAlert(header: string, message: string) {  // se encarga de mostrar una alerta en la interfaz de usuario.
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }// Muestra la alerta en la pantalla y espera a que se presente

  cancel() {
    this.router.navigate(['/inicio']);
  }
}
