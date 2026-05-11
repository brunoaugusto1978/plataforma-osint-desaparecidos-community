import { Camera, MapPin, User } from 'lucide-react';
import { mockCases } from '../mocks/cases.mock';
import { getEvidencesByCaseId } from '../mocks/evidences.mock';
import { formatDate } from '../lib/formatters';
import { RecommendedActionCard } from '../components/cases/RecommendedActionCard';
import { EvidenceCard } from '../components/cases/EvidenceCard';

export function CaseDetails() {
  const caseItem = mockCases[0];
  const evidences = getEvidencesByCaseId(caseItem.id);

  return (
    <div className="page-stack">
      <section className="case-hero panel">
        <div className="case-avatar"><User size={34} /></div>
        <div>
          <div className="case-line">
            <strong>{caseItem.protocol}</strong>
            <span className={`priority-badge ${caseItem.priority.toLowerCase().replace('é', 'e')}`}>{caseItem.priority}</span>
            <span className="dot" />
            <span>{caseItem.status}</span>
          </div>
          <h1>{caseItem.name}</h1>
          <p>{caseItem.summary}</p>
          <div className="case-meta-grid">
            <span><MapPin size={16} /> {caseItem.lastLocation}</span>
            <span><Camera size={16} /> {caseItem.hasPhoto ? 'Com foto de referência' : 'Sem foto de referência'}</span>
            <span>Criado em {formatDate(caseItem.createdAt)}</span>
          </div>
        </div>
      </section>

      <RecommendedActionCard caseItem={caseItem} />

      <section className="panel">
        <div className="panel-header compact">
          <div>
            <h2>Evidências candidatas</h2>
            <p>Itens fictícios para demonstrar a triagem e decisão humana.</p>
          </div>
        </div>
        <div className="evidence-list">
          {evidences.map((evidence) => <EvidenceCard evidence={evidence} key={evidence.id} />)}
        </div>
      </section>
    </div>
  );
}
