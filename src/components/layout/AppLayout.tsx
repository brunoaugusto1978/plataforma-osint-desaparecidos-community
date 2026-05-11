import { PanelLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import type { ViewKey } from '../../App';
import { Sidebar } from './Sidebar';

interface AppLayoutProps {
  children: ReactNode;
  currentView: ViewKey;
  currentLabel: string;
  onNavigate: (view: ViewKey) => void;
}

export function AppLayout({ children, currentView, currentLabel, onNavigate }: AppLayoutProps) {
  return (
    <div className="app-layout">
      <Sidebar currentView={currentView} onNavigate={onNavigate} />
      <main className="content-shell">
        <header className="topbar">
          <button className="icon-button" type="button" aria-label="Menu demonstrativo">
            <PanelLeft size={18} />
          </button>
          <span className="divider" />
          <span>{currentLabel}</span>
          <span className="environment-pill">Mock seguro</span>
        </header>
        {children}
      </main>
    </div>
  );
}
