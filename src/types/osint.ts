export type SourceOutcome = 'executed_with_evidence' | 'executed_without_evidence' | 'failed' | 'manual_review_required';

export interface SourceRun {
  id: string;
  sourceName: string;
  sourceType: 'official_registry' | 'public_webpage' | 'manual_finding' | 'visual_search' | 'open_data';
  outcome: SourceOutcome;
  durationMs: number;
  itemsReturned: number;
  explanation: string;
}

export interface IntelligenceIndicator {
  label: string;
  value: string;
  helper: string;
}
