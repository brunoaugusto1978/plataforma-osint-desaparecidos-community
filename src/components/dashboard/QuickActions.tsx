import { BarChart3, FolderOpen, Plus } from 'lucide-react';
import type { ViewKey } from '../../App';

interface QuickActionsProps {
  onNavigate: (view: ViewKey) => void;
}

export function QuickActions({ onNavigate }: QuickActionsProps) {
  return (
    <section className="panel quick-actions">
      <div className="panel-header compact">
        <div>
          <h2>Ações Rápidas</h2>
          <p>Acesso rápido às funções principais.</p>
        </div>
      </div>
      <div className="action-list">
        <button className="primary-button" type="button" onClick={() => onNavigate('new-case')}>
          <Plus size={18} /> Registrar Novo Caso
        </button>
        <button className="secondary-button" type="button" onClick={() => onNavigate('all-cases')}>
          <FolderOpen size={18} /> Ver Todos os Casos
        </button>
        <button className="secondary-button" type="button" onClick={() => onNavigate('osint-analysis')}>
          <BarChart3 size={18} /> Análises OSINT
        </button>
      </div>
    </section>
  );
}
