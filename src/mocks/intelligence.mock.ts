import type { IntelligenceIndicator } from '../types/osint';

export const mockIndicators: IntelligenceIndicator[] = [
  { label: 'Casos demonstrativos', value: '4', helper: 'Dados fictícios para testes de interface' },
  { label: 'UFs representadas', value: '3', helper: 'BA, RJ e PE em cenário mockado' },
  { label: 'Pendências de triagem', value: '3', helper: 'Evidências e achados manuais fictícios' },
  { label: 'Fontes simuladas', value: '4', helper: 'Sem consulta a fontes reais' }
];

export const mockRegionalData = [
  { region: 'Bahia', cases: 1, status: 'Aberto' },
  { region: 'Rio de Janeiro', cases: 2, status: 'Misto' },
  { region: 'Pernambuco', cases: 1, status: 'Aberto' }
];
