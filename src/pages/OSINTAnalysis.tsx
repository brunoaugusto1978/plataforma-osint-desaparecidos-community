import { CheckCircle2, Eye, XCircle } from 'lucide-react';
import { mockSourceRuns } from '../mocks/osintRuns.mock';
import { formatDuration } from '../lib/formatters';

const outcomeLabel = {
  executed_with_evidence: 'Executada com evidência',
  executed_without_evidence: 'Executada sem evidência',
  failed: 'Falha operacional',
  manual_review_required: 'Revisão manual necessária'
};

export function OSINTAnalysis() {
  return (
    <div className="page-stack">
      <section className="page-title">
        <h1>Análises OSINT</h1>
        <p>Transparência por fonte em ambiente demonstrativo, sem consulta real a fontes externas.</p>
      </section>

      <section className="panel source-panel">
        {mockSourceRuns.map((run) => {
          const Icon = run.outcome === 'failed' ? XCircle : run.outcome === 'manual_review_required' ? Eye : CheckCircle2;
          return (
            <article className={`source-row ${run.outcome}`} key={run.id}>
              <div className="source-icon"><Icon size={20} /></div>
              <div>
                <h3>{run.sourceName}</h3>
                <p>{run.explanation}</p>
                <small>{run.sourceType} • {formatDuration(run.durationMs)} • {run.itemsReturned} itens</small>
              </div>
              <span>{outcomeLabel[run.outcome]}</span>
            </article>
          );
        })}
      </section>
    </div>
  );
}
