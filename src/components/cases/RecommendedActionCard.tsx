import { Camera, CheckCircle2, Eye, ListChecks } from 'lucide-react';
import type { MissingPersonCase } from '../../types/case';

interface RecommendedActionCardProps {
  caseItem: MissingPersonCase;
}

export function RecommendedActionCard({ caseItem }: RecommendedActionCardProps) {
  let title = 'Nenhuma ação crítica pendente';
  let description = 'O caso demonstrativo não possui pendência crítica no momento.';
  let Icon = CheckCircle2;

  if (!caseItem.hasPhoto) {
    title = 'Adicionar foto de referência';
    description = 'O caso não possui foto. A foto melhora a etapa de busca visual assistida e comparação humana.';
    Icon = Camera;
  } else if (caseItem.pendingManualFindings > 0) {
    title = 'Revisar achados manuais pendentes';
    description = 'Existem achados registrados manualmente aguardando triagem humana.';
    Icon = Eye;
  } else if (caseItem.pendingEvidence > 0) {
    title = 'Revisar evidências sem decisão';
    description = 'Existem evidências candidatas que precisam ser confirmadas, revisadas ou descartadas.';
    Icon = ListChecks;
  }

  return (
    <section className="recommendation-card">
      <div className="recommendation-icon"><Icon size={22} /></div>
      <div>
        <span>Próxima ação recomendada</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}
