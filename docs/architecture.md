# Arquitetura da Community Edition

Esta edição usa React, TypeScript e Vite.

## Camadas

- `components/`: componentes visuais reutilizáveis.
- `pages/`: telas demonstrativas.
- `mocks/`: dados fictícios.
- `services/`: serviços mockados.
- `types/`: contratos TypeScript.
- `docs/`: documentação pública.

## Diferença para o core privado

O core privado pode conter backend real, Supabase, Edge Functions, migrations e conectores operacionais. Nada disso faz parte desta edição pública.
