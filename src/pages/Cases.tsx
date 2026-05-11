import { Search } from 'lucide-react';
import { mockCases } from '../mocks/cases.mock';
import { formatDate } from '../lib/formatters';
import type { ViewKey } from '../App';

interface CasesProps {
  title: string;
  subtitle: string;
  onNavigate: (view: ViewKey) => void;
}

export function Cases({ title, subtitle, onNavigate }: CasesProps) {
  return (
    <div className="page-stack">
      <section className="page-title horizontal-title">
        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className="search-box">
          <Search size={18} />
          <span>Busca demonstrativa</span>
        </div>
      </section>

      <section className="panel table-panel">
        <div className="case-table">
          {mockCases.map((caseItem) => (
            <article className="case-row" key={caseItem.id}>
              <div>
                <div className="case-line">
                  <strong>{caseItem.protocol}</strong>
                  <span className={`priority-badge ${caseItem.priority.toLowerCase().replace('é', 'e')}`}>{caseItem.priority}</span>
                  <span className="dot" />
                  <span>{caseItem.status}</span>
                </div>
                <h3>{caseItem.name}</h3>
                <p>{caseItem.summary}</p>
                <small>{caseItem.city}/{caseItem.state} • Criado em {formatDate(caseItem.createdAt)}</small>
              </div>
              <button className="ghost-button" type="button" onClick={() => onNavigate('case-details')}>Ver Detalhes</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
