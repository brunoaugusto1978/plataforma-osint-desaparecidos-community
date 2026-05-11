# Guia de Contribuição

Obrigado por considerar contribuir com a Community Edition da Plataforma OSINT para Pessoas Desaparecidas.

## Fluxo de contribuição

1. Faça fork do repositório.
2. Crie uma branch:

```bash
git checkout -b feat/minha-melhoria
```

3. Faça a alteração.
4. Execute:

```bash
npm run build
```

5. Envie para seu fork.
6. Abra um Pull Request.

## Tipos de contribuição bem-vindos

- melhorias visuais;
- componentes reutilizáveis;
- ajustes de acessibilidade;
- melhoria de textos e documentação;
- mocks mais claros;
- visualizações agregadas;
- testes de interface;
- internacionalização.

## O que não enviar

- dados reais;
- fotos reais;
- documentos reais;
- credenciais;
- arquivos `.env`;
- endpoints privados;
- scraping agressivo;
- código que colete dados sem governança;
- integrações biométricas sem base legal, consentimento, auditoria e revisão humana.

## Padrão de Pull Request

Inclua no PR:

- o que foi alterado;
- por que a alteração é útil;
- como testar;
- prints, quando for mudança visual;
- confirmação de que não há dados reais.
