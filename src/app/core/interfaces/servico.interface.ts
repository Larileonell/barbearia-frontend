export interface Servico {
  id: number;
  tipo:TipoServico;
  descricao: string;
  preco: number;
  duracaoMinutos: number;
}
export type TipoServico =
  'CORTE' | 'BARBA' | 'SOBRANCELHA' | 'TRATAMENTO';