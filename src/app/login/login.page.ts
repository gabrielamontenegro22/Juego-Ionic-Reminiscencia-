import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../servicios/student.service';
import { AlertController } from '@ionic/angular'; // Importar AlertController

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  credentials = { email: '', phone: '' };

  constructor(
    private authService: StudentService,
    private router: Router,
    private alertController: AlertController // Inyectar AlertController
  ) {}

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  login() {
    console.log('Intentando iniciar sesión con:', this.credentials);
    this.authService.login(this.credentials).subscribe(
      async (response) => {
        console.log('Inicio de sesión exitoso:', response);
        localStorage.setItem('student', JSON.stringify(response.student));
        this.router.navigate(['/elige-rol']);
        await this.presentAlert('Éxito', 'Inicio de sesión exitoso');
      },
      async (error) => {
        console.error('Error en el inicio de sesión:', error);
        await this.presentAlert('Error', 'Credenciales incorrectas');
      }
    );
  }
}
