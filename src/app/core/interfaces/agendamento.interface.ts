export interface Agendamento {
  id: number;
  data: string;
  horario: string;
  status: StatusAgendamento;
  observacao: string;
  nomeCliente: string;
  nomeBarbeiro: string;
  tipoServico: string;
  criadoEm: string;
}

export interface AgendamentoRequest {
  data: string;
  horario: string;
  barbeiroId: number;
  clienteId: number;
  servicoId: number;
  observacao?: string;
}

export type StatusAgendamento =
  'AGENDADO' | 'CONFIRMADO' | 'CANCELADO';