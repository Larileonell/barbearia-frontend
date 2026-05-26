export interface Cliente {
    id: number;
    nome: string;
    email: string;
    endereco: string;
    criadoEm: string;
}

export interface ClienteRequest {
    nome: string;
    email: string;
    cpf: string;
    endereco: string;
}