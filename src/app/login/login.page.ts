import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router

import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  // Inyectar Router en el constructor
  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router  // Asegúrate de agregar private router aquí
  ) { 
    
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  async ingresar(){
    var f = this.formularioLogin.value;
  
    var usuarioString = localStorage.getItem('usuario');
  
    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);
  
      if (usuario.nombre === f.nombre && usuario.password === f.password) {
        console.log('Ingresado correctamente');
        
        // Redirigir a otra página
        this.router.navigate(['/juego']);  // Reemplaza 'pagina-destino' por la ruta deseada

      } else {
        const alert = await this.alertController.create({
          header: 'Datos Incorrectos',
          message: 'Usuario o contraseña incorrectos',
          buttons: ['Entendido'],
        });
    
        await alert.present();
      }
    } else {
      console.log('No hay usuarios registrados');
    }
  }
}
