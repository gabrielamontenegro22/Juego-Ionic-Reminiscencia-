import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
        private apiUrl = 'http://127.0.0.1:8000/api/students';
  



  constructor(private http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get<any>(this.apiUrl);   //todos
  }

  getStudent(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`); // mediante el id
  }

  createStudent(studentData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, studentData);  //create student
  }

  updateStudent(id: number, studentData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, studentData); // actualzia mediante id
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`); //eliminar mediante el id
  }

  login(credentials: { email: string, phone: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials); //POST para autenticar a un estudiante. 
  }

  assignSala(id: number, salaId: number): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}/assign-sala`, { salaId }); //PATCH para asignar una sala a un estudiante.
  }

  uploadProfilePicture(id: number, formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}/profile-picture`, formData); // POST para subir una foto de perfil de un estudiante.  formdata
  }
  
  // Método para subir una imagen en base64 como perfil del estudiante
  uploadCapturedProfilePicture(id: number, base64Image: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}/profile-picture`, { profile_picture: base64Image });  //POST para subir una foto de perfil de un estudiante.  base64
  }


  // Nuevo método para guardar el token en localStorage
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  verifyAccount(emailOrPhone: string): Observable<any> { // solicitud POST para verificar si una cuenta existe
    return this.http.post<any>(`${this.apiUrl}/verify-account`, { email_or_phone: emailOrPhone });
  }
  
  
  updatePassword(id: number, newPassword: string, confirmPassword: string): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}/update-password`, { // PATCH para cambiar la contraseña de un estudiante
      new_password: newPassword,
      new_password_confirmation: confirmPassword
    });
  }
  
}
