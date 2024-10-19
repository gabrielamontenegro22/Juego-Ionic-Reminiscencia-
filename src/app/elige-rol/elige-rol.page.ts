import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elige-rol',
  templateUrl: './elige-rol.page.html',
  styleUrls: ['./elige-rol.page.scss'],
})
export class EligeRolPage {

  constructor(private router: Router) {}

  selectRole(role: string) {
    if (role === 'master') {
      this.router.navigate(['/salas']);
    } else if (role === 'jugador') {
      this.router.navigate(['/jugador-dashboard']);
    }
  }
}
