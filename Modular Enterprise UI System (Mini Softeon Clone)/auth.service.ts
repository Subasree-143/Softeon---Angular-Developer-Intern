// core/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private role: string = 'admin'; // simulate user role

  getUserRole() {
    return this.role;
  }

  setRole(role: string) {
    this.role = role;
  }
}