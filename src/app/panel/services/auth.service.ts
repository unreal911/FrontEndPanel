import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { registerForm } from '../interfaces/register.interface';
const base_url=environment.base_url
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) {

   }
   crearUsuario(usuario:registerForm){
     return this.http.post(`${base_url}/usuario`,usuario)
   }
}
