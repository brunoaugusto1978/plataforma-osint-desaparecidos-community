import type { Evidence } from '../types/evidence';

export const mockEvidences: Evidence[] = [
  {
    id: 'ev-001',
    caseId: 'case-001',
    source: 'Cadastro público demonstrativo',
    title: 'Possível correspondência por nome e UF',
    url: 'https://example.org/fonte-publica-demonstrativa',
    tier: 'Forte',
    decision: 'Não avaliada',
    score: 82,
    collectedAt: '2026-05-09T10:30:00Z',
    description: 'Evidência fictícia para simular correspondência forte. Não representa dado real.'
  },
  {
    id: 'ev-002',
    caseId: 'case-001',
    source: 'Página pública demonstrativa',
    title: 'Menção contextual em notícia pública',
    url: 'https://example.org/noticia-demonstrativa',
    tier: 'Contextual',
    decision: 'Em revisão',
    score: 54,
    collectedAt: '2026-05-09T10:45:00Z',
    description: 'Sinal contextual fictício para testar revisão humana.'
  },
  {
    id: 'ev-003',
    caseId: 'case-002',
    source: 'Achado manual',
    title: 'Registro manual informado por analista',
    url: 'https://example.org/achado-manual',
    tier: 'Manual',
    decision: 'Não avaliada',
    score: 0,
    collectedAt: '2026-05-09T11:00:00Z',
    description: 'Achado manual fictício. No produto real, achados manuais não recebem score automático.'
  }
];

export const getEvidencesByCaseId = (caseId: string) => mockEvidences.filter((evidence) => evidence.caseId === caseId);
