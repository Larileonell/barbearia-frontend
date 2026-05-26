import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginRequest, LoginResponse } from '../interfaces/auth.interface';
import { ApiService } from './api.service';


@Injectable({
    providedIn: "root",
})
export class AuthService extends ApiService {
    constructor(http: HttpClient, private router: Router) {
        super(http);
    }
    login(request: LoginRequest): Observable<LoginResponse> {
        return this.http
            .post<LoginResponse>(`${this.apiUrl}/auth/login`, request)
            .pipe(
                tap(response => {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('usuario', JSON.stringify(response));
                })
            );
    }
    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        this.router.navigate(['/login']);
    }
    getToken(): string | null {
        return localStorage.getItem('token');
    }
    isLoggedIn(): boolean {
        return this.getToken() !== null;
    }

    getUsuario(): LoginResponse | null {
        const usuario = localStorage.getItem('usuario');
        return usuario ? JSON.parse(usuario) : null;
    }





}