import type { SourceRun } from '../types/osint';

export const mockSourceRuns: SourceRun[] = [
  {
    id: 'run-001',
    sourceName: 'Cadastro público demonstrativo',
    sourceType: 'official_registry',
    outcome: 'executed_with_evidence',
    durationMs: 1840,
    itemsReturned: 1,
    explanation: 'Fonte executada com retorno candidato para revisão humana.'
  },
  {
    id: 'run-002',
    sourceName: 'Web pública demonstrativa',
    sourceType: 'public_webpage',
    outcome: 'executed_without_evidence',
    durationMs: 950,
    itemsReturned: 0,
    explanation: 'Fonte executada sem evidência persistida.'
  },
  {
    id: 'run-003',
    sourceName: 'Busca visual assistida',
    sourceType: 'visual_search',
    outcome: 'manual_review_required',
    durationMs: 0,
    itemsReturned: 0,
    explanation: 'Abertura assistida em mecanismo público; sem importação automática.'
  },
  {
    id: 'run-004',
    sourceName: 'Fonte pública temporária',
    sourceType: 'public_webpage',
    outcome: 'failed',
    durationMs: 3200,
    itemsReturned: 0,
    explanation: 'Falha simulada para demonstrar transparência por fonte.'
  }
];
