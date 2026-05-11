import { Map, PieChart, TrendingUp } from 'lucide-react';
import { mockIndicators, mockRegionalData } from '../mocks/intelligence.mock';

export function Intelligence() {
  return (
    <div className="page-stack">
      <section className="page-title">
        <h1>Inteligência de Dados</h1>
        <p>Camada agregada com indicadores fictícios para evolução colaborativa de visualizações.</p>
      </section>

      <section className="stats-grid">
        {mockIndicators.map((indicator) => (
          <article className="stat-card" key={indicator.label}>
            <div className="stat-header">
              <span>{indicator.label}</span>
              <span className="stat-icon blue"><TrendingUp size={18} /></span>
            </div>
            <strong>{indicator.value}</strong>
            <p>{indicator.helper}</p>
          </article>
        ))}
      </section>

      <section className="intelligence-grid">
        <article className="panel">
          <div className="panel-header compact">
            <div>
              <h2>Distribuição regional</h2>
              <p>Dados simulados por UF.</p>
            </div>
            <Map size={22} />
          </div>
          <div className="regional-list">
            {mockRegionalData.map((item) => (
              <div className="regional-row" key={item.region}>
                <span>{item.region}</span>
                <strong>{item.cases}</strong>
                <small>{item.status}</small>
              </div>
            ))}
          </div>
        </article>

        <article className="panel chart-placeholder">
          <PieChart size={42} />
          <h2>Espaço para gráficos</h2>
          <p>Colaboradores podem propor gráficos, mapas, filtros e componentes de análise agregada aqui.</p>
        </article>
      </section>
    </div>
  );
}
