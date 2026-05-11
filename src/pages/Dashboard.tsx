import { Activity, CheckCircle2, Clock, Folder } from 'lucide-react';
import { mockCases } from '../mocks/cases.mock';
import { StatCard } from '../components/dashboard/StatCard';
import { RecentCases } from '../components/dashboard/RecentCases';
import { QuickActions } from '../components/dashboard/QuickActions';
import type { ViewKey } from '../App';

interface DashboardProps {
  onNavigate: (view: ViewKey) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const total = mockCases.length;
  const active = mockCases.filter((caseItem) => caseItem.status !== 'Resolvido').length;
  const resolved = mockCases.filter((caseItem) => caseItem.status === 'Resolvido').length;
  const needsAttention = mockCases.filter((caseItem) => !caseItem.hasPhoto || caseItem.pendingEvidence || caseItem.pendingManualFindings).length;

  return (
    <div className="page-stack">
      <section className="page-title">
        <h1>Bem-vindo, Bruno Lobo</h1>
        <p>Gerencie investigações e análises OSINT em uma interface demonstrativa com dados fictícios.</p>
      </section>

      <section className="stats-grid">
        <StatCard title="Total de Casos" value={total} helper="Todos os casos demonstrativos" icon={<Folder size={18} />} />
        <StatCard title="Casos Ativos" value={active} helper="Em andamento ou abertos" icon={<Clock size={18} />} tone="amber" />
        <StatCard title="Casos Resolvidos" value={resolved} helper="Concluídos com sucesso" icon={<CheckCircle2 size={18} />} tone="green" />
        <StatCard title="Atividade" value={needsAttention} helper="Necessitam atenção" icon={<Activity size={18} />} tone="blue" />
      </section>

      <div className="dashboard-grid">
        <RecentCases onNavigate={onNavigate} />
        <QuickActions onNavigate={onNavigate} />
      </div>
    </div>
  );
}
