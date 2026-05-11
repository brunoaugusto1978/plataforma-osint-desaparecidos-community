import type { MissingPersonCase } from '../types/case';

export const mockCases: MissingPersonCase[] = [
  {
    id: 'case-001',
    protocol: 'MP260008',
    name: 'Caso Demonstrativo Alpha',
    age: 34,
    city: 'Salvador',
    state: 'BA',
    lastLocation: 'Terminal rodoviário - Salvador/BA',
    status: 'Aberto',
    priority: 'Média',
    createdAt: '2026-05-09',
    hasPhoto: true,
    pendingManualFindings: 0,
    pendingEvidence: 2,
    summary: 'Caso fictício usado para demonstrar triagem de evidências candidatas.'
  },
  {
    id: 'case-002',
    protocol: 'MP260007',
    name: 'Caso Demonstrativo Beta',
    age: 22,
    city: 'Niterói',
    state: 'RJ',
    lastLocation: 'Região central - Niterói/RJ',
    status: 'Aguardando Triagem',
    priority: 'Alta',
    createdAt: '2026-05-09',
    hasPhoto: true,
    pendingManualFindings: 2,
    pendingEvidence: 1,
    summary: 'Caso fictício usado para demonstrar achados manuais pendentes.'
  },
  {
    id: 'case-003',
    protocol: 'MP260006',
    name: 'Caso Demonstrativo Gamma',
    age: 41,
    city: 'Recife',
    state: 'PE',
    lastLocation: 'Boa Viagem - Recife/PE',
    status: 'Aberto',
    priority: 'Média',
    createdAt: '2026-05-09',
    hasPhoto: false,
    pendingManualFindings: 0,
    pendingEvidence: 0,
    summary: 'Caso fictício usado para demonstrar orientação para adicionar foto.'
  },
  {
    id: 'case-004',
    protocol: 'MP260005',
    name: 'Caso Demonstrativo Delta',
    age: 29,
    city: 'Rio de Janeiro',
    state: 'RJ',
    lastLocation: 'Vigário Geral - Rio de Janeiro/RJ',
    status: 'Em Andamento',
    priority: 'Baixa',
    createdAt: '2026-04-20',
    hasPhoto: true,
    pendingManualFindings: 0,
    pendingEvidence: 0,
    summary: 'Caso fictício usado para estado neutro de acompanhamento.'
  }
];

export const getCaseById = (id: string) => mockCases.find((caseItem) => caseItem.id === id) ?? mockCases[0];
