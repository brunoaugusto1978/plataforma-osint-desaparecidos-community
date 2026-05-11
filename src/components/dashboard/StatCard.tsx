import type { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  helper: string;
  icon: ReactNode;
  tone?: 'blue' | 'green' | 'amber' | 'red';
}

export function StatCard({ title, value, helper, icon, tone = 'blue' }: StatCardProps) {
  return (
    <article className="stat-card">
      <div className="stat-header">
        <span>{title}</span>
        <span className={`stat-icon ${tone}`}>{icon}</span>
      </div>
      <strong>{value}</strong>
      <p>{helper}</p>
    </article>
  );
}
