export type CaseStatus = 'Aberto' | 'Em Andamento' | 'Resolvido' | 'Aguardando Triagem';
export type Priority = 'Alta' | 'Média' | 'Baixa';

export interface MissingPersonCase {
  id: string;
  protocol: string;
  name: string;
  age: number;
  city: string;
  state: string;
  lastLocation: string;
  status: CaseStatus;
  priority: Priority;
  createdAt: string;
  hasPhoto: boolean;
  pendingManualFindings: number;
  pendingEvidence: number;
  summary: string;
}
