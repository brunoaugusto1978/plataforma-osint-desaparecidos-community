import { MessageCircle, ShieldCheck } from 'lucide-react';

export function ReportModeration() {
  return (
    <div className="page-stack">
      <section className="page-title">
        <h1>Moderação de Relatos</h1>
        <p>Área demonstrativa para triagem de relatos externos antes de associação ao caso.</p>
      </section>

      <section className="panel moderation-grid">
        <article className="moderation-card">
          <MessageCircle size={22} />
          <h2>Relato fictício aguardando revisão</h2>
          <p>Conteúdo demonstrativo, sem nome real, sem imagem real e sem evidência operacional.</p>
          <div className="moderation-actions">
            <button className="secondary-button" type="button">Marcar em revisão</button>
            <button className="ghost-button" type="button">Descartar</button>
          </div>
        </article>
        <article className="moderation-card safe">
          <ShieldCheck size={22} />
          <h2>Proteção de dados</h2>
          <p>Relatos reais não devem ser submetidos neste repositório público. Use somente exemplos fictícios.</p>
        </article>
      </section>
    </div>
  );
}
