import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Agendamento,
  AgendamentoRequest,
  StatusAgendamento
} from '../interfaces/agendamento.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AgendamentoService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
  }
 listar(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(`${this.apiUrl}/agendamentos`);
  }
  listarPorCliente(clienteId: number): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(
      `${this.apiUrl}/agendamentos/cliente/${clienteId}`);
  }

  listarPorStatus(status: StatusAgendamento): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(
      `${this.apiUrl}/agendamentos/status/${status}`);
  }

  criar(request: AgendamentoRequest): Observable<Agendamento> {
    return this.http.post<Agendamento>(
      `${this.apiUrl}/agendamentos`, request);
  }

  confirmar(id: number): Observable<Agendamento> {
    return this.http.patch<Agendamento>(
      `${this.apiUrl}/agendamentos/${id}/confirmar`, {});
  }

  cancelar(id: number): Observable<Agendamento> {
    return this.http.patch<Agendamento>(
      `${this.apiUrl}/agendamentos/${id}/cancelar`, {});
  }



}