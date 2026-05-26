import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { HttpClient } from "@angular/common/http";
import { Barbeiro, BarbeiroRequest } from "../interfaces/barbeiro.interface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class BarbeiroService extends ApiService {

    constructor(http: HttpClient) {
        super(http);
    }

    listar(): Observable<Barbeiro[]> {
        return this.http.get<Barbeiro[]>(`${this.apiUrl}/barbeiros`);
    }
    buscarPorId(id: number): Observable<Barbeiro> {
        return this.http.get<Barbeiro>(`${this.apiUrl}/barbeiros/${id}`);
    }

    cadastrar(request: BarbeiroRequest): Observable<Barbeiro> {
        return this.http.post<Barbeiro>(`${this.apiUrl}/barbeiros`, request);
    }

    atualizar(id: number, request: BarbeiroRequest): Observable<Barbeiro> {
        return this.http.put<Barbeiro>(`${this.apiUrl}/barbeiros/${id}`, request);
    }
    inativar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/barbeiros/${id}`);
    }




}