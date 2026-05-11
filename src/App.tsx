import { useMemo, useState } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { Dashboard } from './pages/Dashboard';
import { Cases } from './pages/Cases';
import { CaseDetails } from './pages/CaseDetails';
import { OSINTAnalysis } from './pages/OSINTAnalysis';
import { ReportModeration } from './pages/ReportModeration';
import { Intelligence } from './pages/Intelligence';
import { NewCase } from './pages/NewCase';
import { Notifications } from './pages/Notifications';

export type ViewKey =
  | 'dashboard'
  | 'my-cases'
  | 'all-cases'
  | 'case-details'
  | 'osint-analysis'
  | 'moderation'
  | 'intelligence'
  | 'new-case'
  | 'notifications';

const viewLabels: Record<ViewKey, string> = {
  dashboard: 'Dashboard',
  'my-cases': 'Meus Casos',
  'all-cases': 'Todos os Casos',
  'case-details': 'Detalhe do Caso',
  'osint-analysis': 'Análises OSINT',
  moderation: 'Moderação de Relatos',
  intelligence: 'Inteligência de Dados',
  'new-case': 'Novo Caso',
  notifications: 'Notificações'
};

function App() {
  const [currentView, setCurrentView] = useState<ViewKey>('dashboard');
  const currentLabel = useMemo(() => viewLabels[currentView], [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'my-cases':
        return <Cases title="Meus Casos" subtitle="Casos fictícios vinculados ao usuário demonstrativo." onNavigate={setCurrentView} />;
      case 'all-cases':
        return <Cases title="Todos os Casos" subtitle="Lista pública demonstrativa para colaboradores testarem componentes." onNavigate={setCurrentView} />;
      case 'case-details':
        return <CaseDetails />;
      case 'osint-analysis':
        return <OSINTAnalysis />;
      case 'moderation':
        return <ReportModeration />;
      case 'intelligence':
        return <Intelligence />;
      case 'new-case':
        return <NewCase />;
      case 'notifications':
        return <Notifications />;
      case 'dashboard':
      default:
        return <Dashboard onNavigate={setCurrentView} />;
    }
  };

  return (
    <AppLayout currentView={currentView} currentLabel={currentLabel} onNavigate={setCurrentView}>
      {renderView()}
    </AppLayout>
  );
}

export default App;
