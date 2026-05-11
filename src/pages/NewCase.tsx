export function NewCase() {
  return (
    <div className="page-stack">
      <section className="page-title">
        <h1>Registrar Novo Caso</h1>
        <p>Formulário demonstrativo. Não envie dados reais nesta versão pública.</p>
      </section>

      <section className="panel form-panel">
        <label>
          Nome fictício
          <input placeholder="Ex.: Caso Demonstrativo Zeta" />
        </label>
        <label>
          Última localização fictícia
          <input placeholder="Ex.: Centro - Cidade/UF" />
        </label>
        <label>
          Observações demonstrativas
          <textarea placeholder="Descreva apenas cenário fictício para teste de interface." />
        </label>
        <button className="primary-button" type="button">Salvar rascunho demonstrativo</button>
      </section>
    </div>
  );
}
