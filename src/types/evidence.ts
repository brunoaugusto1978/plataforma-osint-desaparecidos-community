export type EvidenceDecision = 'Não avaliada' | 'Confirmada' | 'Em revisão' | 'Descartada';
export type EvidenceTier = 'Forte' | 'Contextual' | 'Sinal fraco' | 'Manual';

export interface Evidence {
  id: string;
  caseId: string;
  source: string;
  title: string;
  url: string;
  tier: EvidenceTier;
  decision: EvidenceDecision;
  score: number;
  collectedAt: string;
  description: string;
}
