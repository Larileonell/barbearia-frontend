import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servico } from '../interfaces/servico.interface';
import { ApiService } from './api.service';


@Injectable({
    providedIn: "root",
})
export class ServicoService extends ApiService {
    constructor(http: HttpClient) {
        super(http);
    }
    listar(): Observable<Servico[]> {
        return this.http.get<Servico[]>(`${this.apiUrl}/servicos`);
    }

    buscarPorId(id: number): Observable<Servico> {
        return this.http.get<Servico>(`${this.apiUrl}/servicos/${id}`);
    }
}