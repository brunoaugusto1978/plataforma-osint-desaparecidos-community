import { ArrowRight } from 'lucide-react';
import { mockCases } from '../../mocks/cases.mock';
import { formatDate } from '../../lib/formatters';
import type { ViewKey } from '../../App';

interface RecentCasesProps {
  onNavigate: (view: ViewKey) => void;
}

export function RecentCases({ onNavigate }: RecentCasesProps) {
  return (
    <section className="panel recent-cases">
      <div className="panel-header">
        <div>
          <h2>Casos Recentes</h2>
          <p>Últimos casos fictícios registrados na plataforma community.</p>
        </div>
        <button className="primary-button small" type="button" onClick={() => onNavigate('all-cases')}>
          Ver Todos <ArrowRight size={16} />
        </button>
      </div>

      <div className="recent-list">
        {mockCases.map((caseItem) => (
          <article className="recent-item" key={caseItem.id}>
            <div>
              <div className="case-line">
                <strong>{caseItem.protocol}</strong>
                <span className={`priority-badge ${caseItem.priority.toLowerCase().replace('é', 'e')}`}>{caseItem.priority}</span>
                <span className="dot" />
                <span>{caseItem.status}</span>
              </div>
              <h3>{caseItem.name}</h3>
              <p>Última localização: {caseItem.lastLocation}</p>
              <small>Criado em {formatDate(caseItem.createdAt)}</small>
            </div>
            <button className="ghost-button" type="button" onClick={() => onNavigate('case-details')}>Ver Detalhes</button>
          </article>
        ))}
      </div>
    </section>
  );
}
