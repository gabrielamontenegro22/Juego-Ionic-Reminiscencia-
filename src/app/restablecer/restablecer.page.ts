import { Component } from '@angular/core';
import { StudentService } from '../servicios/student.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage {
  emailOrPhone: string = '';

  constructor(
    private studentService: StudentService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async resetPassword() {
    if (!this.emailOrPhone) {
      await this.showAlert('Error', 'Por favor, ingresa un correo electrónico o número de teléfono');
      return;
    }

    this.studentService.verifyAccount(this.emailOrPhone).subscribe({
      next: async (response) => {
        console.log('Cuenta verificada:', response);
        await this.showAlert('Éxito', 'Cuenta verificada con éxito.');
        this.router.navigate(['/reestablecer2'], { state: { userId: response.student.id } });
      },
      error: async (err) => {
        console.error('Error al verificar cuenta:', err);
        await this.showAlert('Error', 'Cuenta no encontrada. Por favor verifica los datos.');
      },
    });
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
