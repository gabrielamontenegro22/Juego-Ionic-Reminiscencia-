import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-captura-foto',
  templateUrl: './captura-foto.page.html',
  styleUrls: ['./captura-foto.page.scss'],
})
export class CapturaFotoPage implements OnInit {

  profileImage: string = '';

  ngOnInit() {
    this.startCamera();  // Iniciar la cámara al cargar la página
    this.loadSavedImage(); // Cargar la imagen guardada si existe
  }

  // Función para iniciar la cámara y mostrar el video en vivo
  startCamera() {
    const video = <HTMLVideoElement>document.getElementById('video');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Accedemos a la cámara del dispositivo
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream: MediaStream) => {
          video.srcObject = stream;  // Conectamos el stream al elemento video
          video.play();  // Iniciar el video
        })
        .catch(err => {
          console.error("Error al acceder a la cámara: ", err);
        });
    } else {
      console.error("El navegador no soporta getUserMedia");
    }
  }

  // Función para capturar la foto y detener la cámara
  capturePhoto() {
    const video = <HTMLVideoElement>document.getElementById('video');
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    const context = canvas.getContext('2d');

    if (video && canvas && context) {
      // Ajustamos el tamaño del canvas al tamaño del video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Dibujamos el video en el canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convertimos el contenido del canvas a una imagen en formato base64
      this.profileImage = canvas.toDataURL('image/png');

      // Guardamos la imagen en el almacenamiento local
      Preferences.set({
        key: 'profileImage',
        value: this.profileImage
      });

      // Detenemos el stream de la cámara
      const mediaStream = video.srcObject as MediaStream;
      if (mediaStream && mediaStream.getTracks) {
        mediaStream.getTracks().forEach(track => track.stop());  // Detenemos las pistas de la cámara
      } else {
        console.error("No se pudo acceder a las pistas de la cámara");
      }
    } else {
      console.error("No se pudo acceder a los elementos del DOM");
    }
  }

  // Cargar la imagen de perfil guardada
  async loadSavedImage() {
    const { value } = await Preferences.get({ key: 'profileImage' });
    if (value) {
      this.profileImage = value;  // Mostrar la imagen guardada
    }
  }
}
