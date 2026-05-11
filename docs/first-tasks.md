\# Primeiras tarefas para colaboradores



Este documento lista tarefas seguras para quem deseja contribuir com a Community Edition da Plataforma OSINT para Pessoas Desaparecidas.



Atenção: esta versão usa dados fictícios e mocks seguros. Não envie dados reais, fotos reais, nomes reais, evidências reais, credenciais, chaves, URLs sensíveis ou integrações operacionais reais.



A Community Edition tem como objetivo permitir colaboração em usabilidade, interface, documentação, arquitetura demonstrativa, mocks, templates de conectores e propostas seguras de evolução. O core operacional real, os conectores reais, o pipeline privado, as regras completas de scoring, as integrações sensíveis e qualquer fonte operacional devem permanecer fora deste repositório público.



\## Tarefas iniciais recomendadas



\### 1. Melhorar responsividade do Dashboard



\*\*Tipo:\*\* UI/UX  

\*\*Dificuldade:\*\* Baixa  

\*\*Objetivo:\*\* Ajustar cards e listas para melhor visualização em telas menores.  

\*\*Arquivos prováveis:\*\*



\- src/pages/Dashboard.tsx

\- src/components/dashboard/

\- src/components/layout/



\---



\### 2. Melhorar acessibilidade da navegação lateral



\*\*Tipo:\*\* Acessibilidade  

\*\*Dificuldade:\*\* Baixa/Média  

\*\*Objetivo:\*\* Melhorar labels, foco por teclado, contraste e navegação acessível da sidebar.  

\*\*Arquivos prováveis:\*\*



\- src/components/layout/Sidebar.tsx



\---



\### 3. Criar estado vazio para lista de casos



\*\*Tipo:\*\* UI/UX  

\*\*Dificuldade:\*\* Baixa  

\*\*Objetivo:\*\* Criar mensagem amigável quando não houver casos fictícios cadastrados.  

\*\*Arquivos prováveis:\*\*



\- src/pages/Cases.tsx

\- src/components/cases/



\---



\### 4. Melhorar o card de evidências



\*\*Tipo:\*\* UI/UX  

\*\*Dificuldade:\*\* Média  

\*\*Objetivo:\*\* Tornar mais clara a diferença entre evidência candidata, achado manual, fonte consultada e decisão humana.  

\*\*Arquivos prováveis:\*\*



\- src/components/cases/EvidenceCard.tsx

\- src/types/evidence.ts



\---



\### 5. Criar componente de legenda de status



\*\*Tipo:\*\* Componente React  

\*\*Dificuldade:\*\* Média  

\*\*Objetivo:\*\* Criar legenda visual para status como aberto, em andamento, aguardando triagem, resolvido e sem pendência crítica.  

\*\*Arquivos prováveis:\*\*



\- src/components/

\- src/types/case.ts



\---



\### 6. Melhorar documentação de usabilidade



\*\*Tipo:\*\* Documentação  

\*\*Dificuldade:\*\* Baixa  

\*\*Objetivo:\*\* Complementar o fluxo de uso do analista na Community Edition, explicando a jornada desde o dashboard até a análise de evidências.  

\*\*Arquivos prováveis:\*\*



\- docs/usability.md

\- README.md



\---



\### 7. Criar mocks adicionais de inteligência agregada



\*\*Tipo:\*\* Mock seguro  

\*\*Dificuldade:\*\* Média  

\*\*Objetivo:\*\* Adicionar dados fictícios para indicadores por região, status, faixa etária, origem e tendência temporal.  

\*\*Arquivos prováveis:\*\*



\- src/mocks/intelligence.mock.ts

\- src/pages/Intelligence.tsx



\---



\### 8. Melhorar mensagens de governança



\*\*Tipo:\*\* Segurança/Governança  

\*\*Dificuldade:\*\* Baixa  

\*\*Objetivo:\*\* Reforçar nas telas que a versão pública não usa dados reais e que toda análise deve manter validação humana.  

\*\*Arquivos prováveis:\*\*



\- src/pages/

\- docs/privacy-and-ethics.md

\- SECURITY.md



\---



\### 9. Criar template público de conector OSINT



\*\*Tipo:\*\* Conectores / Arquitetura  

\*\*Dificuldade:\*\* Média  

\*\*Objetivo:\*\* Criar um template seguro para colaboradores sugerirem novos conectores sem expor fontes operacionais reais, chaves, endpoints sensíveis ou lógica privada do pipeline.



\*\*Escopo permitido:\*\*



\- Interface genérica de conector.

\- Exemplo com dados fictícios.

\- Metadados do conector: nome, tipo, prioridade, status e categoria.

\- Resultado mockado.

\- Documentação de como propor um novo conector.

\- Separação entre conector demonstrativo e conector operacional real.



\*\*Fora de escopo:\*\*



\- Conectores reais sensíveis.

\- Endpoints privados.

\- Chaves de API.

\- Tokens.

\- Bypass de autenticação.

\- Automação agressiva.

\- Regras completas de scoring do core privado.



\*\*Arquivos prováveis:\*\*



\- examples/connector-template/

\- src/types/osint.ts

\- docs/architecture.md

\- docs/contributor-guide.md



\---



\### 10. Melhorar busca em fontes de surface web



\*\*Tipo:\*\* Busca OSINT / Surface Web  

\*\*Dificuldade:\*\* Média  

\*\*Objetivo:\*\* Melhorar a experiência demonstrativa de busca em fontes públicas da web, mantendo o uso de mocks e sem conectar o repositório community a fontes reais sensíveis.



\*\*Escopo permitido:\*\*



\- Simulação de busca por nome.

\- Simulação de busca por cidade/UF.

\- Normalização de nome fictício.

\- Exibição de fonte consultada.

\- Status por fonte: executada com evidência, executada sem evidência, falha ou não configurada.

\- Dados fictícios para demonstrar o fluxo.

\- Melhorias visuais na tela de análise OSINT.

\- Melhor separação entre fonte oficial, fonte pública e achado manual.



\*\*Exemplos de fontes que podem ser representadas de forma fictícia:\*\*



\- Portais públicos oficiais.

\- Notícias públicas.

\- Páginas institucionais.

\- Repositórios públicos.

\- Dados abertos.

\- Fontes web indexadas.



\*\*Fora de escopo:\*\*



\- Scraping agressivo.

\- Coleta de dados reais.

\- Consulta automatizada em fontes sensíveis.

\- Uso de credenciais.

\- Bypass de bloqueios ou controles de acesso.

\- Importação automática de dados reais.



\*\*Arquivos prováveis:\*\*



\- src/pages/OSINTAnalysis.tsx

\- src/mocks/osintRuns.mock.ts

\- src/types/osint.ts

\- src/components/cases/EvidenceCard.tsx



\---



\### 11. Criar proposta segura para fontes de deep web pública



\*\*Tipo:\*\* Busca OSINT / Deep Web pública  

\*\*Dificuldade:\*\* Média/Alta  

\*\*Objetivo:\*\* Documentar e simular como a plataforma poderia consultar fontes públicas não indexadas por motores de busca, como portais oficiais, bases abertas e formulários públicos.



\*\*Escopo permitido:\*\*



\- Fontes públicas e legais.

\- Bases abertas oficiais.

\- Portais públicos não indexados.

\- Consultas com respeito a termos de uso.

\- Simulação por mock.

\- Registro do status da fonte.

\- Explicação de limites éticos e legais.

\- Human-in-the-loop antes de qualquer interpretação investigativa.



\*\*Fora de escopo:\*\*



\- Bypass de autenticação.

\- Burla de captcha.

\- Coleta de dados restritos.

\- Scraping agressivo.

\- Uso de credenciais.

\- Enumeração indevida.

\- Consulta em áreas privadas.

\- Técnicas de evasão.

\- Automação que viole termos de uso.



\*\*Arquivos prováveis:\*\*



\- docs/architecture.md

\- docs/privacy-and-ethics.md

\- docs/contributor-guide.md

\- src/mocks/osintRuns.mock.ts

\- src/pages/OSINTAnalysis.tsx



\---



\### 12. Criar diretrizes de governança para dark web



\*\*Tipo:\*\* Segurança / Governança / OSINT  

\*\*Dificuldade:\*\* Alta  

\*\*Objetivo:\*\* Criar diretrizes públicas para tratar riscos, limites e governança relacionados a menções em dark web, sem publicar crawler, automação operacional, listas de endereços ou técnicas de acesso.



\*\*Escopo permitido:\*\*



\- Diretrizes éticas e legais.

\- Critérios de validação humana.

\- Fluxo de registro manual de achado.

\- Classificação de confiabilidade.

\- Registro de fonte sem expor detalhes sensíveis.

\- Uso de dados fictícios.

\- Prevenção de falso positivo.

\- Orientação para revisão humana obrigatória.

\- Separação entre menção contextual e evidência investigativa.

\- Documentação de riscos para vítimas, familiares e investigadores.



\*\*Fora de escopo no repositório community:\*\*



\- Crawlers Tor.

\- Lista de onion services.

\- Automação de coleta em fóruns fechados.

\- Técnicas de evasão.

\- Uso de credenciais.

\- Coleta de dados restritos.

\- Instruções operacionais de acesso.

\- Qualquer instrução que possa expor vítimas, familiares ou investigações.

\- Qualquer mecanismo que remova validação humana.



\*\*Arquivos prováveis:\*\*



\- docs/privacy-and-ethics.md

\- SECURITY.md

\- docs/contributor-guide.md

\- src/components/cases/EvidenceCard.tsx

\- src/mocks/evidences.mock.ts



\---



\### 13. Criar componente visual de status por fonte OSINT



\*\*Tipo:\*\* UI/UX / Análise OSINT  

\*\*Dificuldade:\*\* Média  

\*\*Objetivo:\*\* Criar um componente para exibir de forma clara o resultado de cada fonte consultada.



\*\*Estados sugeridos:\*\*



\- Executada com evidência.

\- Executada sem evidência.

\- Falha na execução.

\- Não configurada.

\- Aguardando revisão manual.

\- Achado manual registrado.



\*\*Arquivos prováveis:\*\*



\- src/pages/OSINTAnalysis.tsx

\- src/mocks/osintRuns.mock.ts

\- src/types/osint.ts

\- src/components/



\---



\### 14. Melhorar fluxo de achados manuais



\*\*Tipo:\*\* UX / Governança  

\*\*Dificuldade:\*\* Média  

\*\*Objetivo:\*\* Melhorar a forma como achados manuais fictícios são exibidos, diferenciando claramente evidência automatizada de registro manual feito por analista.



\*\*Escopo permitido:\*\*



\- Uso de dados fictícios.

\- Melhorias visuais.

\- Labels de “manual”, “aguardando triagem” e “revisado”.

\- Orientação de que achados manuais não recebem score automático.

\- Ênfase na decisão humana.



\*\*Arquivos prováveis:\*\*



\- src/components/cases/EvidenceCard.tsx

\- src/mocks/evidences.mock.ts

\- src/types/evidence.ts

\- docs/usability.md



\---



\### 15. Criar documentação sobre proposta de novos conectores



\*\*Tipo:\*\* Documentação / Conectores  

\*\*Dificuldade:\*\* Baixa/Média  

\*\*Objetivo:\*\* Criar uma seção explicando como colaboradores podem sugerir novos conectores de forma segura, sem implementar coleta real sensível.



\*\*A documentação deve explicar:\*\*



\- Tipo da fonte.

\- Finalidade investigativa.

\- Dados retornados de forma fictícia.

\- Riscos de privacidade.

\- Limitações legais.

\- Necessidade de validação humana.

\- Diferença entre proposta pública e implementação privada.

\- Critérios para aceitar ou recusar uma proposta.



\*\*Arquivos prováveis:\*\*



\- docs/contributor-guide.md

\- docs/architecture.md

\- examples/connector-template/README.md



\---



\## Categorias de contribuição



As contribuições serão organizadas em categorias para facilitar revisão e priorização.



\### UI/UX



Melhorias de interface, responsividade, acessibilidade, organização visual, microcopy e experiência do analista.



\### Documentação



Melhorias em README, guia de contribuição, governança, usabilidade, arquitetura e segurança.



\### Mocks seguros



Criação ou melhoria de dados fictícios usados para demonstrar o fluxo da plataforma sem expor dados reais.



\### Conectores demonstrativos



Templates, interfaces genéricas e exemplos fictícios de conectores OSINT.



\### Surface web



Propostas e melhorias demonstrativas para fontes públicas indexadas ou facilmente acessíveis, sempre com mocks e sem coleta real sensível.



\### Deep web pública



Propostas conceituais e documentadas para fontes públicas não indexadas, como portais oficiais, bases públicas e formulários abertos, sem bypass ou scraping agressivo.



\### Dark web



Somente governança, documentação, fluxo de triagem manual e prevenção de risco. Não serão aceitos crawlers, automações operacionais, listas de onion services ou instruções de acesso.



\### Segurança e governança



Regras, documentação, validação humana, prevenção de falso positivo, privacidade, ética e auditoria.



\---



\## Como contribuir



1\. Faça um fork do repositório.

2\. Crie uma branch para sua alteração.

3\. Faça a alteração usando apenas dados fictícios.

4\. Rode `npm run build`.

5\. Abra um Pull Request.

6\. Aguarde revisão.

7\. Ajuste o Pull Request se houver comentários.

8\. Aguarde o merge.



\---



\## Fluxo recomendado para Pull Requests



Antes de enviar um Pull Request, verifique:



\- O projeto compila com `npm run build`.

\- Nenhum dado real foi incluído.

\- Nenhuma foto real foi incluída.

\- Nenhum nome real foi incluído.

\- Nenhuma credencial foi incluída.

\- Nenhum endpoint sensível foi incluído.

\- Nenhuma integração operacional real foi incluída.

\- Nenhuma regra privada de scoring foi incluída.

\- Nenhum conector real sensível foi incluído.

\- A alteração está limitada à Community Edition.



\---



\## O que não será aceito



\- Dados reais de pessoas desaparecidas.

\- Fotos reais.

\- Evidências reais.

\- Chaves, tokens ou credenciais.

\- Integrações com Supabase real.

\- Edge Functions operacionais reais.

\- Migrations reais.

\- Pipeline operacional privado.

\- Scoring real privado.

\- Conectores reais sensíveis.

\- Automação agressiva de scraping.

\- Bypass de autenticação.

\- Burla de captcha.

\- Técnicas de evasão.

\- Crawlers Tor.

\- Listas de onion services.

\- Coleta em fóruns fechados.

\- Funcionalidades que removam validação humana.

\- Conteúdo que exponha vítimas, familiares, investigadores ou casos reais.



\---



\## Princípios do projeto



\- Dados fictícios por padrão.

\- Validação humana obrigatória.

\- Transparência por fonte.

\- Separação entre evidência candidata e decisão humana.

\- Redução de falso positivo.

\- Proteção de vítimas e familiares.

\- Respeito a limites legais e éticos.

\- Explicabilidade antes de automação.

\- Community Edition pública separada do core privado.

