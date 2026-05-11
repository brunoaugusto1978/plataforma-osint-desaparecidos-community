# Como aproveitar melhorias da Community Edition no projeto privado

O repositório público não altera o projeto privado automaticamente.

## Fluxo seguro

1. Colaborador abre Pull Request no repositório público.
2. A alteração é revisada.
3. A alteração entra somente no repositório público.
4. O mantenedor decide se a melhoria será aproveitada no projeto privado.
5. No projeto privado, o mantenedor cria uma branch de teste.
6. A melhoria é copiada manualmente ou adaptada.
7. O build e os testes são executados.
8. Somente depois a alteração pode entrar no core privado.

## Exemplo

```bash
cd D:\Projeto_Osint\osint-find-lost-trails
git checkout main
git checkout -b importar-melhoria-community
npm run build
npm run dev
```

Se a alteração não funcionar, a branch pode ser apagada sem afetar a branch principal.
