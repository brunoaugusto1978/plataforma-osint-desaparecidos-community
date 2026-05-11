import { Bell } from 'lucide-react';

export function Notifications() {
  return (
    <div className="page-stack">
      <section className="page-title">
        <h1>Notificações</h1>
        <p>Alertas demonstrativos para fluxo operacional community.</p>
      </section>
      <section className="panel notification-list">
        <article><Bell size={18} /> Evidência fictícia aguardando decisão humana.</article>
        <article><Bell size={18} /> Caso sem foto de referência precisa de complemento.</article>
        <article><Bell size={18} /> Achado manual demonstrativo pendente de revisão.</article>
      </section>
    </div>
  );
}
