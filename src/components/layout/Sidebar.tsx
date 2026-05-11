import type { ComponentType } from 'react';
import {
  BarChart3,
  Bell,
  Database,
  FileSearch,
  Folder,
  Home,
  MessageCircle,
  Plus,
  Search,
  Shield,
  UserCircle
} from 'lucide-react';
import type { ViewKey } from '../../App';

interface SidebarProps {
  currentView: ViewKey;
  onNavigate: (view: ViewKey) => void;
}

const navItems: Array<{ key: ViewKey; label: string; icon: ComponentType<{ size?: number }> }> = [
  { key: 'dashboard', label: 'Dashboard', icon: Home },
  { key: 'my-cases', label: 'Meus Casos', icon: Folder },
  { key: 'all-cases', label: 'Todos os Casos', icon: Search },
  { key: 'osint-analysis', label: 'Análises OSINT', icon: BarChart3 },
  { key: 'moderation', label: 'Moderação de Relatos', icon: MessageCircle },
  { key: 'intelligence', label: 'Inteligência de Dados', icon: Database }
];

const actionItems: Array<{ key: ViewKey; label: string; icon: ComponentType<{ size?: number }> }> = [
  { key: 'new-case', label: 'Novo Caso', icon: Plus },
  { key: 'notifications', label: 'Notificações', icon: Bell }
];

export function Sidebar({ currentView, onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon"><Shield size={22} /></div>
        <div>
          <strong>OSINT Platform</strong>
          <span>Pessoas Desaparecidas</span>
        </div>
      </div>

      <nav className="nav-block" aria-label="Navegação principal">
        <p>Navegação</p>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.key}
              className={currentView === item.key ? 'nav-item active' : 'nav-item'}
              onClick={() => onNavigate(item.key)}
              type="button"
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <nav className="nav-block" aria-label="Ações rápidas">
        <p>Ações</p>
        {actionItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.key}
              className={currentView === item.key ? 'nav-item active' : 'nav-item'}
              onClick={() => onNavigate(item.key)}
              type="button"
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <UserCircle size={24} />
        <div>
          <strong>Analista Demo</strong>
          <span>Community Edition</span>
        </div>
      </div>
    </aside>
  );
}
