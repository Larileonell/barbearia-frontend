export interface Barbeiro {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    especialidade: string;
    ativo: boolean;
    criadoEm: string;
}
export interface BarbeiroRequest{
    nome: string;
    email: string;
    telefone: string;
    especialidade: string;
}