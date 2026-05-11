import { ExternalLink } from 'lucide-react';
import type { Evidence } from '../../types/evidence';

interface EvidenceCardProps {
  evidence: Evidence;
}

export function EvidenceCard({ evidence }: EvidenceCardProps) {
  return (
    <article className="evidence-card">
      <div className="evidence-header">
        <div>
          <span>{evidence.source}</span>
          <h3>{evidence.title}</h3>
        </div>
        <span className={`tier-badge ${evidence.tier.toLowerCase().replace(' ', '-')}`}>{evidence.tier}</span>
      </div>
      <p>{evidence.description}</p>
      <div className="evidence-meta">
        <span>Score demo: {evidence.score}</span>
        <span>Decisão: {evidence.decision}</span>
        <a href={evidence.url} target="_blank" rel="noreferrer">Abrir fonte demo <ExternalLink size={14} /></a>
      </div>
    </article>
  );
}
